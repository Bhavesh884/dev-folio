import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;

  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Username is required' });
  }

  try {
    // GitHub GraphQL query
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
    const allDays = weeks.flatMap((week: any) => week.contributionDays);

    // Calculate streaks
    let currentStreak = 0;
    let maxStreak = 0;
    let currentStreakStart = '';
    let maxStreakStart = '';
    let maxStreakEnd = '';

    let tempStreak = 0;
    let tempStart = '';
    
    for (let i = allDays.length - 1; i >= 0; i--) {
      if (allDays[i].contributionCount > 0) {
        tempStreak++;
        if (tempStreak === 1) {
          tempStart = allDays[i].date;
        }
      } else {
        if (tempStreak > maxStreak) {
          maxStreak = tempStreak;
          maxStreakStart = tempStart;
          maxStreakEnd = allDays[i + 1]?.date || tempStart;
        }
        tempStreak = 0;
      }
    }

    // Check if current streak is the longest
    if (tempStreak > maxStreak) {
      maxStreak = tempStreak;
      maxStreakStart = tempStart;
      maxStreakEnd = allDays[0].date;
    }

    currentStreak = tempStreak;
    currentStreakStart = tempStart;

    res.status(200).json({
      totalContributions: data.data.user.contributionsCollection.contributionCalendar.totalContributions,
      currentStreak: {
        start: currentStreakStart,
        end: allDays[0].date,
        length: currentStreak,
      },
      longestStreak: {
        start: maxStreakStart,
        end: maxStreakEnd,
        length: maxStreak,
      },
      contributionGraph: data.data.user.contributionsCollection.contributionCalendar,
    });
  } catch (error) {
    console.error('GitHub API error:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}