import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import CuFront from "./Descriptions/CuFront";
import UltraCreation from "./Descriptions/UltraCreation";
import BluOcean from "./Descriptions/BluOcean";
import Codemistic from "./Descriptions/Codemistic";

export default function WhereIHaveWorked() {
  const [activeCompany, setActiveCompany] = useState("UltraCreation");
  const [hoveredCompany, setHoveredCompany] = useState<string | null>(null);

  const companies = [
    { id: "UltraCreation", name: "Ultra Creation IT Solutions" },
    { id: "CuFront", name: "CuFront HealthCare" },
    { id: "BluOcean", name: "BluOcean Technologies" },
    { id: "Codemistic", name: "Codemistic" },
  ];

  const GetDescription = () => {
    switch (activeCompany) {
      case "UltraCreation":
        return <UltraCreation />;
      case "CuFront":
        return <CuFront />;
      case "BluOcean":
        return <BluOcean />;
      case "Codemistic":
        return <Codemistic />;
      default:
        return <UltraCreation />;
    }
  };

  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center mb-16">
        <span className="text-blue-400 font-mono text-lg mr-2">02.</span>
        <h2 className="text-3xl font-bold text-white">Work Experience</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-900/50 via-blue-400 to-transparent ml-6" />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Company Selector - Vertical Timeline Style */}
        <div className="lg:w-1/3 relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gray-800 -z-10" />

          <div className="flex flex-col space-y-2 pl-2">
            {companies.map((company) => (
              <motion.button
                key={company.id}
                onClick={() => setActiveCompany(company.id)}
                onMouseEnter={() => setHoveredCompany(company.id)}
                onMouseLeave={() => setHoveredCompany(null)}
                className={`text-left pl-8 py-3 rounded-lg relative transition-all duration-300 ${
                  activeCompany === company.id
                    ? "bg-blue-900/20 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full ${
                    activeCompany === company.id
                      ? "bg-blue-400 ring-4 ring-blue-400/30"
                      : "bg-gray-600"
                  }`}
                />

                {/* Company name */}
                <motion.span
                  className={`block font-medium ${
                    activeCompany === company.id ? "text-blue-400" : ""
                  }`}
                >
                  {company.name}
                </motion.span>

                {/* Hover highlight */}
                {hoveredCompany === company.id &&
                  activeCompany !== company.id && (
                    <motion.div
                      className="absolute inset-0 bg-blue-900/10 rounded-lg"
                      layoutId="hoverBg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Job Description */}
        <motion.div
          key={activeCompany}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:w-2/3 bg-white/5 backdrop-blur-sm border border-gray-800 rounded-xl p-6 shadow-lg"
        >
          <GetDescription />
        </motion.div>
      </div>
    </section>
  );
}
