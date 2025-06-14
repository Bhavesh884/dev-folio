import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function CuFront() {
  const tasks = [
    {
      text: "Developed and maintained a robust MERN-based EHR and clinic management portal with responsive UI.",
      keywords: ["MERN‑based", "EHR", "clinic management", "responsive UI"],
    },
    {
      text: "Integrated appointment scheduling, vaccination slot booking and patient record modules using React and Node.",
      keywords: [
        "appointment scheduling",
        "vaccination slot booking",
        "patient record",
        "React",
        "Node",
      ],
    },
    {
      text: "Implemented secure authentication and role-based access using JWT/OAuth with support for doctors, admins, and patients.",
      keywords: ["secure authentication", "role‑based access", "JWT", "OAuth"],
    },
    {
      text: "Optimized data workflows with MongoDB schemas, indexing, and CI/CD deployment to AWS for high availability.",
      keywords: [
        "MongoDB schemas",
        "indexing",
        "CI/CD",
        "AWS",
        "high availability",
      ],
    },
    {
      text: "Built analytics dashboards to visualize appointment trends and clinic performance, enhancing admin insights.",
      keywords: [
        "analytics dashboards",
        "appointment trends",
        "clinic performance",
        "admin insights",
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Company header */}
      <div className="flex flex-col space-y-1 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            MERN Stack Developer
          </h3>
          <span className="text-sm text-gray-400">Mar 2023 – Dec 2023</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-blue-400 font-medium">
            @ CuFront Healthcare Technologies
          </span>
          <a
            href="https://www.cufront.com/"
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
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-green-900/30 blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-teal-900/20 blur-xl" />
    </div>
  );
}
