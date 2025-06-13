import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import GitHubStats from "../../GitHubStats/GitHubStats";
import Testimonials from "../../Testimonials/Testimonials";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className="flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full max-w-6xl mx-auto pb-12 px-4 md:px-8 lg:px-0"
    >
      {/* Title Section */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0 ">
        <ArrowIcon className="flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary" />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm sm:text-xl">
            03.
          </span>
          <span className="font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Featured Projects
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Project 1 - UltraExpert */}
      <div
        data-aos="fade-up"
        className="relative md:grid md:grid-cols-12 w-full md:h-96"
      >
        {/* Image Section (Desktop) */}
        <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
          <div className="relative rounded w-full h-full col-start-6 col-span-7">
            <a href="https://ultraxpert.in" target="_blank" rel="noreferrer">
              <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
            </a>
            <Img
              src={"/ultraxpert.png"}
              alt={"UltraExpert Platform Screenshot"}
              className="w-full rounded h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
          {/* Mobile Background */}
          <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
              <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
              <Img
                src={"/ultraxpert.png"}
                alt={"UltraExpert Platform Screenshot"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
            <div className="flex flex-col space-y-1 z-10">
              <span className="text-AAsecondary text-base">
                Featured Project
              </span>
              <a
                href="https://ultraxpert.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Expert-Connect Platform
                </span>
              </a>
            </div>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
              <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                Developed a comprehensive tech consultation platform connecting
                developers with industry experts. Implemented secure
                microservices architecture with JWT authentication and real-time
                video consultations using WebRTC. Engineered advanced search
                algorithms improving user discovery by 45% and optimized
                performance achieving 30% faster load times.
              </p>
            </div>
            <ul className="flex flex-wrap w-full text-AAsecondary md:text-gray-400 text-sm font-Text2 md:justify-start">
              <span className="pr-4 z-10">React.js</span>
              <span className="pr-4 z-10">Node.js</span>
              <span className="pr-4 z-10">MongoDB</span>
              <span className="pr-4 z-10">WebRTC</span>
              <span className="pr-4 z-10">AWS</span>
            </ul>
            <div className="z-10 flex flex-row space-x-5">
              <GithubIcon link="https://github.com/yourusername/ultraxpert" />
              <a href="https://ultraxpert.in" target="_blank" rel="noreferrer">
                <ExternalLink url="" router={router} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="relative md:grid md:grid-cols-12 w-full md:h-96"
      >
        {/* Image Section (Desktop) */}
        <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
          <div className="relative rounded w-full h-full col-span-7">
            <a
              href="https://aussiedrivingschool.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
            </a>
            <Img
              src={"/dlt.png"}
              alt={"Aussie Driving School Screenshot"}
              className="w-full rounded h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
          {/* Mobile Background */}
          <div className="absolute w-full h-full bg-opacity-70 z-0">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
              <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
              <Img
                src={"/dlt.png"}
                alt={"Aussie Driving School Screenshot"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
            <div className="flex flex-col space-y-1 md:items-end z-10">
              <span className="text-AAsecondary text-base">
                Featured Project
              </span>
              <a
                href="https://aussiedrivingschool.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Aussie Driving School
                </span>
              </a>
            </div>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
              <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                Built a full-stack driving lesson booking platform serving 500+
                monthly users. Implemented real-time instructor availability
                tracking reducing booking conflicts by 75%. Developed dynamic
                pricing algorithm and integrated Stripe payment processing for
                $50,000+ transactions securely. Automated notifications
                decreased no-show rates by 35%.
              </p>
            </div>
            <ul className="flex flex-wrap w-full text-AAsecondary md:text-gray-400 text-sm font-Text2 md:justify-end">
              <span className="pr-4 z-10">Next.js</span>
              <span className="pr-4 z-10">Firebase</span>
              <span className="pr-4 z-10">Stripe</span>
              <span className="pr-4 z-10">WebSockets</span>
              <span className="pr-4 z-10">Google Maps API</span>
            </ul>
            <div className="z-10 flex flex-row space-x-5">
              <GithubIcon link="https://github.com/yourusername/aussie-driving" />
              <a
                href="https://aussiedrivingschool.com"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink url="" router={router} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3- */}

      <div
        data-aos="fade-up"
        className="relative md:grid md:grid-cols-12 w-full md:h-96"
      >
        {/* Image Section */}
        <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
          <div className="relative rounded w-full h-full col-start-6 col-span-7">
            <a href="[YOUR_LIVE_LINK]" target="_blank" rel="noreferrer">
              <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
            </a>
            <Img
              src={"/flavourfusion.png"}
              alt={"Flavor Fusion Screenshot"}
              className="w-full rounded h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
          {/* Mobile Background */}
          <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
              <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
              <Img
                src={"/flavourfusion.png"}
                alt={"Flavor Fusion Screenshot"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
            <div className="flex flex-col space-y-1 z-10">
              <span className="text-AAsecondary text-base">
                Featured Project
              </span>
              <a
                href="[YOUR_LIVE_LINK]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Flavor Fusion
                </span>
              </a>
            </div>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
              <p className="text-gray-300 md:text-gray-400 text-left md:text-left">
                Developed a dynamic food ordering platform with config-driven UI
                using Swiggy API for real-time data. Implemented secure
                authentication with bcrypt hashing and Google OAuth. Reduced
                code complexity by 30% using Redux Toolkit and optimized
                performance with Lazy Loading, efficiently rendering 100+ food
                items.
              </p>
            </div>
            <ul className="flex flex-wrap w-full text-AAsecondary md:text-gray-400 text-sm font-Text2 md:justify-start">
              <span className="pr-4 z-10">React.js</span>
              <span className="pr-4 z-10">Redux Toolkit</span>
              <span className="pr-4 z-10">Node.js</span>
              <span className="pr-4 z-10">MongoDB</span>
              <span className="pr-4 z-10">OAuth</span>
            </ul>
            <div className="z-10 flex flex-row space-x-5">
              <GithubIcon link="[YOUR_GITHUB_LINK]" />
              <a href="[YOUR_LIVE_LINK]" target="_blank" rel="noreferrer">
                <ExternalLink url={""} router={router} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 - Portfolio Website */}
      <div
        data-aos="fade-up"
        className="relative md:grid md:grid-cols-12 w-full md:h-96"
      >
        {/* Image Section */}
        <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
          <div className="relative rounded w-full h-full col-span-7">
            <a href="[YOUR_PORTFOLIO_LINK]" target="_blank" rel="noreferrer">
              <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
            </a>
            <Img
              src={"/devfolio.png"}
              alt={"Portfolio Website Screenshot"}
              className="w-full rounded h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
          {/* Mobile Background */}
          <div className="absolute w-full h-full bg-opacity-70 z-0">
            <div className="relative w-full h-full">
              <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
              <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
              <Img
                src={"/devfolio.png"}
                alt={"Portfolio Website Screenshot"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
            <div className="flex flex-col space-y-1 md:items-end z-10">
              <span className="text-AAsecondary text-base">
                Featured Project
              </span>
              <a
                href="[YOUR_PORTFOLIO_LINK]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Developer Portfolio
                </span>
              </a>
            </div>
            <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
              <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                Built a high-performance portfolio website with Next.js and
                TypeScript, achieving 98+ Lighthouse scores. Implemented smooth
                animations with Framer Motion and responsive design with
                Tailwind CSS. Features project showcases, skills visualization,
                and contact form with serverless functions for email delivery.
              </p>
            </div>
            <ul className="flex flex-wrap w-full text-AAsecondary md:text-gray-400 text-sm font-Text2 md:justify-end">
              <span className="pr-4 z-10">Next.js</span>
              <span className="pr-4 z-10">TypeScript</span>
              <span className="pr-4 z-10">Framer Motion</span>
              <span className="pr-4 z-10">Tailwind CSS</span>
              <span className="pr-4 z-10">Vercel</span>
            </ul>
            <div className="z-10 flex flex-row space-x-5">
              <GithubIcon link="[YOUR_PORTFOLIO_GITHUB]" />
              <a href="[YOUR_PORTFOLIO_LINK]" target="_blank" rel="noreferrer">
                <ExternalLink url={""} router={router} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <GitHubStats />
      <Testimonials />
    </div>
  );
}
