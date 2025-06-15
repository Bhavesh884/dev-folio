import React from "react";
import { motion } from "framer-motion";

export default function Codemistic() {
  const tasks = [
    "Conducted over 15 interactive live sessions on C++ and Web Development for student batches.",
    "Facilitated group assignments, enhancing collaboration and problem-solving among students.",
    "Created hands-on project-based learning experiences using real-world coding problems.",
    "Organized doubt-clearing workshops to strengthen conceptual clarity and confidence.",
    "Received appreciation for building a supportive and inclusive online learning environment.",
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Teaching Assistant @ Codemistic
        </h3>
        <span className="text-sm text-gray-400">Jan 2023 – Mar 2023</span>
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
