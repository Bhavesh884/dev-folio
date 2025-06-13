import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path as needed
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
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          MERN Stack Developer{" "}
          <span className="text-AAsecondary">
            @ CuFront Healthcare Technologies Pvt Ltd
          </span>
        </span>
        <span className="font-mono text-xs text-gray-500">
          Mar 2023 – Dec 2023
        </span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          style={{ fontSize: "0.6rem" }}
          onClick={() => window.open("https://www.cufront.com/", "_blank")}
        >
          www.cufront.com
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
            />
          </div>
        ))}
      </div>
    </div>
  );
}
