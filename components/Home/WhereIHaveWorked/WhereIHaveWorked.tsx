import React from "react";
import { motion } from "framer-motion";
import ArrowIcon from "../../Icons/ArrowIcon";

import CuFront from "./Descriptions/CuFront";
import UltraCreation from "./Descriptions/UltraCreation";
import BluOcean from "./Descriptions/BluOcean";
import Codemistic from "./Descriptions/Codemistic";

export default function WhereIHaveWorked() {
  const GetDescription = () => {
    switch (DescriptionJob) {
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

  const [DescriptionJob, setDescriptionJob] = React.useState("UltraCreation");

  return (
    <div
      data-aos="fade-up"
      className="snap-start w-full flex flex-col items-center py-24 space-y-12 px-4 md:px-8 lg:px-16"
    >
      {/* Title */}
      <section className="flex flex-row items-center w-full max-w-6xl">
        <div className="flex flex-row items-center">
          <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary" />
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>

      {/* Content Section */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto flex flex-col space-y-6">
          <CompaniesBar setDescriptionJob={setDescriptionJob} />
          <div className="w-full">{GetDescription()}</div>
        </div>
      </section>
    </div>
  );
}

const CompaniesBar = (props) => {
  const [barPosition, setBarPosition] = React.useState<number>(-8);
  const [barAbovePosition, setBarAbovePosition] = React.useState<number>(0);
  const [companyNameBackgroundColorGreen, setCompanyNameBackgroundColorGreen] =
    React.useState<boolean[]>([true, false, false, false]);

  const CompanyButton = (props) => {
    return (
      <button
        onClick={() => {
          setBarPosition(props.BarPosition);
          setBarAbovePosition(props.BarAvobePosition);
          props.setDescriptionJob(props.DescriptionJob);
          setCompanyNameBackgroundColorGreen(
            props.CompanyNameBackgroundColorGreen
          );
        }}
        className={`flex-shrink-0 text-xs sm:text-sm md:text-base text-center hover:text-AAsecondary hover:bg-ResumeButtonHover rounded font-mono px-4 py-2 transition-all duration-300
          ${
            companyNameBackgroundColorGreen[
              props.ButtonOrderOfcompanyNameBackgroundColorGreen
            ]
              ? "bg-ResumeButtonHover text-AAsecondary"
              : "text-gray-500"
          }`}
      >
        {props.CompanyName}
      </button>
    );
  };

  return (
    <div
      id="WhereIhaveWorkedSection"
      className="w-full flex flex-col items-center space-y-2"
    >
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="min-w-full flex flex-row items-center justify-between space-x-2 px-2 sm:px-4">
          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={0}
            CompanyName="UltraCreation"
            BarPosition={-10}
            BarAvobePosition={10}
            DescriptionJob="UltraCreation"
            CompanyNameBackgroundColorGreen={[true, false, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />

          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={1}
            CompanyName="CuFront"
            BarPosition={140}
            BarAvobePosition={348}
            DescriptionJob="CuFront"
            CompanyNameBackgroundColorGreen={[false, true, false, false]}
            setDescriptionJob={props.setDescriptionJob}
          />

          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={2}
            CompanyName="BluOcean"
            BarPosition={420}
            BarAvobePosition={672}
            DescriptionJob="BluOcean"
            CompanyNameBackgroundColorGreen={[false, false, true, false]}
            setDescriptionJob={props.setDescriptionJob}
          />

          <CompanyButton
            ButtonOrderOfcompanyNameBackgroundColorGreen={3}
            CompanyName="Codemistic"
            BarPosition={720}
            BarAvobePosition={996}
            DescriptionJob="Codemistic"
            CompanyNameBackgroundColorGreen={[false, false, false, true]}
            setDescriptionJob={props.setDescriptionJob}
          />
        </div>
      </div>

      {/* Animated underline */}
      <div className="w-full px-4 relative h-0.5 bg-gray-500 mt-1">
        <motion.div
          animate={{ x: barAbovePosition }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute h-0.5 w-32 bg-AAsecondary rounded"
        />
      </div>
    </div>
  );
};
