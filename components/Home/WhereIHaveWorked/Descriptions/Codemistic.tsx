import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path as needed

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
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Teaching Assistant{" "}
          <span className="text-AAsecondary">@ Codemistic</span>
        </span>
        <span className="font-mono text-xs text-gray-500">
          Aug 2023 – Dec 2023
        </span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          style={{ fontSize: "0.6rem" }}
          onClick={() => window.open("https://github.com/codemistic", "_blank")}
        >
          codemistic.in
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {tasks.map((item, index) => (
          <div key={index} className="flex flex-row space-x-2">
            <ArrowIcon className="h-5 w-4 text-AAsecondary flex-none" />
            <span
              className="text-gray-500 sm:text-sm text-xs"
              dangerouslySetInnerHTML={{
                __html: getTasksTextWithHighlightedKeyword(
                  item.text,
                  item.keywords
                ),
              }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
