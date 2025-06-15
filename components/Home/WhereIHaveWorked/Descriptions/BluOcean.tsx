import React from "react";
import { motion } from "framer-motion";

export default function BluOcean() {
  const tasks = [
    "Designed and implemented responsive UIs using ReactJS and Tailwind CSS.",
    "Created reusable components and UI patterns to speed up development and reduce bugs.",
    "Collaborated with backend teams to optimize API structures and reduce server-side costs by 10%.",
    "Maintained consistent design system for cross-platform compatibility and scalability.",
    "Used Git & GitHub for collaborative version control and documented pull requests thoroughly.",
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Frontend Developer @ Blu Ocean Innovations
        </h3>
        <span className="text-sm text-gray-400">Apr 2022 – Jun 2023</span>
      </div>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start"
          >
            <span className="text-blue-400 mr-3">▹</span>
            <span className="text-gray-300">{task}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
