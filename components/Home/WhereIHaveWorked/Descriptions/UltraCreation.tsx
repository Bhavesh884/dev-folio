import ArrowIcon from "../../../Icons/ArrowIcon"; // Adjust path as needed
import React from "react";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function UltraCreation() {
  const tasks = [
    {
      text: "Developed, deployed, and delivered full-stack MERN applications with scalable architecture.",
      keywords: ["Developed", "deployed", "MERN", "scalable architecture"],
    },
    {
      text: "Collaborated with backend developers and UI/UX designers to reduce feature release cycle from 4 weeks to 2.",
      keywords: [
        "Collaborated",
        "backend developers",
        "UI/UX designers",
        "release cycle",
      ],
    },
    {
      text: "Integrated and tested RESTful APIs and analytics modules to improve response time by 15%.",
      keywords: ["Integrated", "RESTful APIs", "analytics", "response time"],
    },
    {
      text: "Worked in a fast-paced agile environment with weekly sprints and cross-functional team standups.",
      keywords: [
        "agile environment",
        "weekly sprints",
        "cross-functional",
        "team standups",
      ],
    },
    {
      text: "Deployed features using version-controlled CI/CD pipelines to AWS-hosted environments.",
      keywords: ["CI/CD", "AWS", "version control", "deployed"],
    },
  ];

  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col space-y-2">
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Full Stack Developer{" "}
          <span className="text-AAsecondary">
            @ Ultra Creation IT Solutions
          </span>
        </span>
        <span className="font-mono text-xs text-gray-500">
          Jan 2024 – Present
        </span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          style={{ fontSize: "0.6rem" }}
          onClick={() => window.open("https://ultraxpert.in/", "_blank")}
        >
          solutions.ultraxpert.in
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
