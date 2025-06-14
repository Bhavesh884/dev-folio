import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Codemistic() {
  const tasks = [
    {
      text: "Conducted over 15 interactive live sessions on C++ and Web Development for student batches.",
      keywords: [
        "15 interactive sessions",
        "C++",
        "Web Development",
        "students",
      ],
    },
    {
      text: "Facilitated group assignments, enhancing collaboration and problem-solving among students.",
      keywords: [
        "Facilitated",
        "group assignments",
        "collaboration",
        "problem-solving",
      ],
    },
    {
      text: "Created hands-on project-based learning experiences using real-world coding problems.",
      keywords: [
        "project-based",
        "real-world problems",
        "learning experiences",
        "hands-on",
      ],
    },
    {
      text: "Organized doubt-clearing workshops to strengthen conceptual clarity and confidence.",
      keywords: [
        "workshops",
        "doubt-clearing",
        "conceptual clarity",
        "confidence",
      ],
    },
    {
      text: "Received appreciation for building a supportive and inclusive online learning environment.",
      keywords: [
        "supportive",
        "inclusive",
        "learning environment",
        "appreciation",
      ],
    },
  ];

  return (
    <div className="relative">
      {/* Company header */}
      <div className="flex flex-col space-y-1 mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            Teaching Assistant
          </h3>
          <span className="text-sm text-gray-400">Aug 2023 – Dec 2023</span>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-blue-400 font-medium">@ Codemistic</span>
          <a
            href="https://github.com/codemistic"
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
      <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-purple-900/30 blur-xl" />
      <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-indigo-900/20 blur-xl" />
    </div>
  );
}
