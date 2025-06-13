import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path as needed

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
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Frontend Developer{" "}
          <span className="text-AAsecondary">@ Blu Ocean Innovations</span>
        </span>
        <span className="font-mono text-xs text-gray-500">
          Apr 2022 – Jun 2023
        </span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          style={{ fontSize: "0.6rem" }}
          onClick={() => window.open("https://boipl.com/", "_blank")}
        >
          blu-ocean.in
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
