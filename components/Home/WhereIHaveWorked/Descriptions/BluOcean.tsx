import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function BluOcean() {
  const tasks = [
    {
      text: "Designed and implemented responsive UIs using ReactJS and Tailwind CSS.",
      keywords: ["responsive UIs", "ReactJS", "Tailwind CSS", "designed"],
    },
    {
      text: "Created reusable components and UI patterns to speed up development and reduce bugs.",
      keywords: [
        "reusable components",
        "UI patterns",
        "development",
        "reduce bugs",
      ],
    },
    {
      text: "Collaborated with backend teams to optimize API structures and reduce server-side costs by 10%.",
      keywords: [
        "backend teams",
        "API structures",
        "optimize",
        "server-side costs",
      ],
    },
    {
      text: "Maintained consistent design system for cross-platform compatibility and scalability.",
      keywords: [
        "design system",
        "cross-platform",
        "compatibility",
        "scalability",
      ],
    },
    {
      text: "Used Git & GitHub for collaborative version control and documented pull requests thoroughly.",
      keywords: ["Git", "GitHub", "version control", "pull requests"],
    },
  ];

  return (
    <div className="relative">
      {/* Company header */}
      <div className="flex flex-col space-y-1 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            Frontend Developer
          </h3>
          <span className="text-sm text-gray-400">Apr 2022 – Jun 2023</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-blue-400 font-medium">
            @ Blu Ocean Innovations
          </span>
          <a
            href="https://boipl.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <FiExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Tasks list */}
      <ul className="space-y-4">
        {tasks.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start"
          >
            <div className="flex-shrink-0 mt-1 mr-3">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <span
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: getTasksTextWithHighlightedKeyword(
                  item.text,
                  item.keywords
                ),
              }}
            />
          </motion.li>
        ))}
      </ul>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-cyan-900/30 blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-sky-900/20 blur-xl" />
    </div>
  );
}
