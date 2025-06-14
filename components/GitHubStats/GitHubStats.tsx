import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface GitHubStats {
  totalContributions: number;
  currentStreak: {
    start: string;
    end: string;
    length: number;
  };
  longestStreak: {
    start: string;
    end: string;
    length: number;
  };
  contributionGraph: {
    weeks: {
      contributionDays: {
        date: string;
        contributionCount: number;
      }[];
    }[];
  };
}

const GitHubStats = ({
  username = process.env.NEXT_PUBLIC_GITHUB_USERNAME,
}: {
  username?: string;
}) => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`/api/github-stats?username=${username}`);
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub stats");
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch GitHub stats"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, [username]);

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-AAsecondary"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center py-8">{error}</div>;
  }

  if (!stats) return null;

  // Parse and flatten all contribution days
  const allContributions = stats.contributionGraph.weeks.flatMap(
    (week) =>
      week.contributionDays
        .map((day) => {
          const parsedDate = new Date(day.date);
          return isNaN(parsedDate.getTime())
            ? null
            : { date: parsedDate, count: day.contributionCount };
        })
        .filter(Boolean) as { date: Date; count: number }[]
  );

  // Group by year
  const contributionsByYear: Record<number, typeof allContributions> = {};
  allContributions.forEach((contribution) => {
    const year = contribution.date.getFullYear();
    if (!contributionsByYear[year]) {
      contributionsByYear[year] = [];
    }
    contributionsByYear[year].push(contribution);
  });

  // Get first and last contribution dates
  const firstContribution = allContributions[0]?.date;
  const lastContribution = allContributions[allContributions.length - 1]?.date;
  const dateRange =
    firstContribution && lastContribution
      ? `${formatDate(firstContribution.toISOString())} - ${formatDate(
          lastContribution.toISOString()
        )}`
      : "N/A";

  return (
    <div className="bg-AAprimary rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-200 mb-6">
        GitHub Contributions
      </h2>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Contributions"
          value={stats.totalContributions.toLocaleString()}
          subtitle={dateRange}
        />
        <StatCard
          title="Current Streak"
          value={
            stats.currentStreak.length > 0
              ? `${stats.currentStreak.length} days`
              : "No streak"
          }
          subtitle={
            stats.currentStreak.start && stats.currentStreak.end
              ? `${formatDate(stats.currentStreak.start)} - ${formatDate(
                  stats.currentStreak.end
                )}`
              : "Keep contributing!"
          }
        />
        <StatCard
          title="Longest Streak"
          value={
            stats.longestStreak.length > 0
              ? `${stats.longestStreak.length} days`
              : "No streak"
          }
          subtitle={
            stats.longestStreak.start && stats.longestStreak.end
              ? `${formatDate(stats.longestStreak.start)} - ${formatDate(
                  stats.longestStreak.end
                )}`
              : "Start your streak!"
          }
        />
      </div>

      {/* Contribution Graph */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-300 mb-4">
          Contribution History
        </h3>
        <div className="space-y-6">
          {Object.entries(contributionsByYear)
            .sort(([a], [b]) => parseInt(b) - parseInt(a))
            .map(([year, contributions]) => (
              <ContributionGraph
                key={year}
                year={parseInt(year)}
                contributions={contributions}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-AAtertiary rounded-lg p-4 shadow-md"
  >
    <h3 className="text-sm font-medium text-AAsecondary">{title}</h3>
    <p className="text-3xl font-bold text-gray-200 my-2">{value}</p>
    <p className="text-xs text-gray-400">{subtitle}</p>
  </motion.div>
);

const CONTRIBUTION_COLORS = [
  "bg-gray-700",
  "bg-blue-500",
  "bg-blue-400",
  "bg-blue-300",
  "bg-blue-200",
];

const getContributionColor = (count: number) => {
  if (count === 0) return CONTRIBUTION_COLORS[0];
  if (count <= 3) return CONTRIBUTION_COLORS[1];
  if (count <= 6) return CONTRIBUTION_COLORS[2];
  if (count <= 9) return CONTRIBUTION_COLORS[3];
  return CONTRIBUTION_COLORS[4];
};

const ContributionGraph = ({
  year,
  contributions,
}: {
  year: number;
  contributions: { date: Date; count: number }[];
}) => {
  // Group by weeks
  const weeks: { startDate: Date; days: { date: Date; count: number }[] }[] =
    [];
  let currentWeek: (typeof weeks)[0] | null = null;

  contributions.forEach((contribution) => {
    const dayOfWeek = contribution.date.getDay(); // 0 = Sunday
    if (dayOfWeek === 0 || !currentWeek) {
      currentWeek = {
        startDate: contribution.date,
        days: [],
      };
      weeks.push(currentWeek);
    }
    currentWeek.days.push(contribution);
  });

  return (
    <div className="mb-6">
      <h4 className="text-gray-400 mb-2 text-sm font-medium">{year}</h4>
      <div className="flex space-x-1 overflow-x-auto pb-2">
        {weeks.map((week, weekIdx) => (
          <div key={weekIdx} className="flex flex-col space-y-1">
            {week.days.map((day, dayIdx) => (
              <motion.div
                key={dayIdx}
                whileHover={{
                  scale: 1.5,
                  zIndex: 10,
                  boxShadow: "0 0 8px rgba(74, 222, 128, 0.8)",
                }}
                className={`h-4 w-4 rounded-sm ${getContributionColor(
                  day.count
                )} border border-gray-800`}
                title={`${day.date.toLocaleDateString()}: ${
                  day.count
                } contribution${day.count !== 1 ? "s" : ""}`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-end mt-2 space-x-4">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-sm bg-blue-500 mr-1" />
          <span className="text-xs text-gray-400">1-3</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-sm bg-blue-400 mr-1" />
          <span className="text-xs text-gray-400">4-6</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-sm bg-blue-300 mr-1" />
          <span className="text-xs text-gray-400">7-9</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-sm bg-blue-200 mr-1" />
          <span className="text-xs text-gray-400">10+</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
