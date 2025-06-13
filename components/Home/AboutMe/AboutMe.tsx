import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
import { forwardRef } from "react";
import { motion } from "framer-motion";

interface AboutMeProps {}

const About = () => {
  const technologies = [
    ["Next.js/React", "TypeScript/JavaScript", "Tailwind CSS", "Java", "AWS"],
    [
      "Node.js/Express",
      "C++",
      "Data Structures/OOPS",
      "MongoDB/SQL Server",
      "Postman/Rest API",
    ],
  ];

  return (
    <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-7/12 space-y-4 sm:text-base text-sm"
      >
        <div className="font-Header text-gray-400 text-justify">
          Hey! I&apos;m Bhavesh, a passionate{" "}
          <span className="text-AAsecondary">Full Stack Developer</span> with a
          love for solving real-world problems through clean, scalable code. My
          journey started with C++ and DSA, and evolved into building full-stack
          applications that make a real impact.
        </div>
        <div className="font-Header text-gray-400 text-justify">
          I&apos;ve had the opportunity to work with companies like{" "}
          <span className="text-AAsecondary">Ultra Creation</span> and{" "}
          <span className="text-AAsecondary">Blu Ocean Innovations</span>, where
          I built MERN-based platforms, improved performance metrics, and
          collaborated in agile teams. I’ve also served as a{" "}
          <span className="text-AAsecondary">
            Teaching Assistant at Codemistic
          </span>
          , helping 100+ students grasp web fundamentals.
        </div>
        <div className="font-Header text-gray-400 text-justify">
          Some of my proudest work includes{" "}
          <a
            href="https://ultraxpert.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-AAsecondary underline underline-offset-2"
          >
            Xperts-Connect
          </a>
          , a developer-expert consultation platform, and{" "}
          <a
            href="https://aussiedrivingschool.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-AAsecondary underline underline-offset-2"
          >
            Aussie Driving School
          </a>
          , an online lesson-booking system inspired by EZLicence.
        </div>
        <div className="font-Header text-gray-400 text-justify">
          I thrive on challenges, especially those that push me to explore new
          tools like <span className="text-AAsecondary">AWS</span>, streamline
          backend logic, or lead student tech communities. I recently reached
          the finals of{" "}
          <span className="text-AAsecondary">Smart India Hackathon 2023</span>{" "}
          and have over{" "}
          <span className="text-AAsecondary">800+ GitHub contributions</span> to
          date.
        </div>
        <div className="font-Header tracking-wide text-gray-400 pt-2 pb-1 text-justify">
          Here&apos;s what I&apos;m currently working with:
        </div>

        {/* Tech Stack */}
        <div className="font-Header tracking-wide flex flex-row space-x-12 md:space-x-16 justify-center lg:justify-start flex-wrap">
          {technologies.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-col space-y-4 sm:text-base text-sm"
            >
              {group.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="flex flex-row items-center space-x-2"
                >
                  <ArrowIcon className="h-3 w-3 text-AAsecondary flex-none" />
                  <span className="text-gray-400 sm:text-sm text-xs">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="font-Header text-gray-400 pt-4 text-justify">
          Whether it's building teaching tools, scalable SaaS platforms, or
          mentoring students — I’m always up for a project that blends
          creativity with code.
        </div>
      </motion.div>

      {/* Image Section (Desktop and Tablet) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden"
      >
        <div className="group-hover:translate-x-3 group-hover:translate-y-3 duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 translate-y-5 rounded"></div>
        <div className="absolute w-5/6 h-5/6 rounded overflow-hidden">
          <Img
            src="/img/profile_portrait.png"
            fill
            className="object-contain rounded-lg"
            alt="Bhavesh Bhanusali"
          />
        </div>
      </motion.div>

      {/* Image Section (Mobile) */}
      <div className="relative w-full h-48 md:hidden flex justify-center items-center">
        <div className="absolute w-48 h-full rounded translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
        <div className="absolute w-48 h-full rounded overflow-hidden">
          <Img
            src="/img/profile_portrait.png"
            fill
            className="object-contain rounded-lg"
            alt="Bhavesh Bhanusali"
          />
        </div>
      </div>
    </div>
  );
};

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>((props, ref) => {
  return (
    <div
      id="aboutSection"
      data-aos="fade-up"
      className="snap-start flex flex-col items-center py-20 bg-AAprimary px-4 md:px-8 lg:px-16"
    >
      {/* Title */}
      <div className="w-full max-w-6xl space-y-8">
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center mr-4">
            <ArrowIcon className="flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary" />
            <span className="text-AAsecondary font-Header text-sm sm:text-xl">
              {" "}
              01.
            </span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>

        {/* Content */}
        <About />
      </div>
    </div>
  );
});

AboutMe.displayName = "AboutMe";
export default AboutMe;
