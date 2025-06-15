import React from "react";
import { motion } from "framer-motion";

export default function CuFront() {
  const tasks = [
    "Developed and maintained a robust MERN-based EHR and clinic management portal with responsive UI.",
    "Integrated appointment scheduling, vaccination slot booking and patient record modules using React and Node.",
    "Implemented secure authentication and role-based access using JWT/OAuth with support for doctors, admins, and patients.",
    "Optimized data workflows with MongoDB schemas, indexing, and CI/CD deployment to AWS for high availability.",
    "Built analytics dashboards to visualize appointment trends and clinic performance, enhancing admin insights.",
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          React Developer @ CuFront Healthcare Technologies
        </h3>
        <span className="text-sm text-gray-400">Mar 2023 – Dec 2023</span>
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
