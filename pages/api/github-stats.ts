import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    const query = `
      query($username: String!) {
        user(login: $username) {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: { username } }),
    });

    if (!response.ok) {
      throw new Error('GitHub API request failed');
    }

    const data = await response.json();
    const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
    
    // Flatten and organize all days by date
    const contributionsByDate: Record<string, number> = {};
    const allDates: string[] = [];
    
    weeks.forEach((week: any) => {
      week.contributionDays.forEach((day: any) => {
        contributionsByDate[day.date] = day.contributionCount;
        allDates.push(day.date);
      });
    });

    // Get today and yesterday dates in same format as GitHub (YYYY-MM-DD)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const formatDateString = (date: Date) => date.toISOString().split('T')[0];
    const todayStr = formatDateString(today);
    const yesterdayStr = formatDateString(yesterday);

    // Calculate current streak
    let currentStreak = 0;
    let currentStreakStart = "";
    let currentStreakEnd = "";
    let checkingDate = yesterday;
    let hasTodayContribution = contributionsByDate[todayStr] > 0;

    // Check yesterday first
    if (contributionsByDate[yesterdayStr] > 0) {
      currentStreak = 1;
      currentStreakEnd = yesterdayStr;
      
      // Move backward until we find a day with no contributions
      let prevDate = new Date(checkingDate);
      while (true) {
        prevDate.setDate(prevDate.getDate() - 1);
        const prevDateStr = formatDateString(prevDate);
        
        if (contributionsByDate[prevDateStr] > 0) {
          currentStreak++;
          currentStreakStart = prevDateStr;
        } else {
          break;
        }
      }
    }

    // Add today's contribution if exists
    if (hasTodayContribution) {
      currentStreak++;
      currentStreakEnd = todayStr;
      if (currentStreak === 1) { // Only today has contribution
        currentStreakStart = todayStr;
      }
    }

    // Calculate longest streak (all time)
    let longestStreak = 0;
    let longestStart = "";
    let longestEnd = "";
    let currentRun = 0;
    let runStart = "";
    
    // Sort dates chronologically
    allDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    
    for (let i = 0; i < allDates.length; i++) {
      const date = allDates[i];
      const prevDate = i > 0 ? allDates[i-1] : null;
      
      if (contributionsByDate[date] > 0) {
        const dayDiff = prevDate ? 
          (new Date(date).getTime() - new Date(prevDate).getTime()) / (1000 * 60 * 60 * 24) : 1;
        
        if (dayDiff === 1) { // Consecutive day
          currentRun++;
          if (currentRun === 1) runStart = date;
        } else { // Gap found
          if (currentRun > longestStreak) {
            longestStreak = currentRun;
            longestStart = runStart;
            longestEnd = prevDate || date;
          }
          currentRun = 1;
          runStart = date;
        }
      } else {
        if (currentRun > longestStreak) {
          longestStreak = currentRun;
          longestStart = runStart;
          longestEnd = prevDate || "";
        }
        currentRun = 0;
        runStart = "";
      }
    }

    // Final check for ongoing streak
    if (currentRun > longestStreak) {
      longestStreak = currentRun;
      longestStart = runStart;
      longestEnd = allDates[allDates.length - 1];
    }

    res.status(200).json({
      totalContributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
      currentStreak: {
        length: currentStreak,
        start: currentStreakStart,
        end: currentStreakEnd
      },
      longestStreak: {
        length: longestStreak,
        start: longestStart,
        end: longestEnd
      },
      contributionGraph: data.data.user.contributionsCollection.contributionCalendar,
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}