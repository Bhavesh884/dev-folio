import React from "react";
import { motion } from "framer-motion";

export default function UltraCreation() {
  const tasks = [
    "Developed full-stack MERN applications with scalable architecture",
    "Reduced feature release cycle from 4 weeks to 2 through collaboration",
    "Improved API response time by 15% through optimization",
    "Worked in agile environment with weekly sprints",
    "Deployed features using CI/CD pipelines to AWS",
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          MERN Stack Developer @ Ultra Creation IT Solutions
        </h3>
        <span className="text-sm text-gray-400">Jan 2024 – Feb 2025</span>
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
