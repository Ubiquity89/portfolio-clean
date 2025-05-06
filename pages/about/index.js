import React, { useState } from "react";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import {
  SiMongodb, // MongoDB icon
  SiExpress,
} from "react-icons/si";
import { FaJava, FaNode } from "react-icons/fa"; // Java and Node.js icons

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiMongodb />,
          <FaNode />,
          <SiExpress />,
        ],
      },
      {
        title: "Java",
        icons: [<FaJava />],
      },
      {
        title: "DSA",
        icons: [<FaJava />],
      },
    ],
  },
  {
    title: "certificates",
    info: [
      {
        title: " Fundamentals of digital marketing",
        stage: "Google",
      },
      {
        title: " Microsoft Certified: Azure Data Fundamentals",
        stage: "Microsoft",
      },
      {
        title: "Data Science",
        stage: "TRYST,IIT Delhi",
      },
      {
        title: " Introduction to Linux and CLI ",
        stage: "The FOSS Club (DTC)",
      },
      {
        title: "Data science AI & CyberSecurity",
        stage: "iSTEP Mentors",
      },
      {
        title: " Data Science & AI & Android ",
        stage: " GDSC-DTC",
      },
    ],
  },
  {
    title: "Hackathons",
    info: [
      {
        title: "Flipkart GRiD 6.0 Robotics Challenge",
      },
      {
        title: "GirlScript Summer of Code",
      },
      {
        title: "Google girl hackathon",
      },
      {
        title: "Code4Cause 2.0",
      },
      {
        title: "Hack The Mountain 5.0",
      },
      {
        title: "HacktoberFest",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Intern- Cofsoft",
        stage: "2 months",
      },
      {
        title: "Intern - TechnoHacks EduTech Official",
        stage: "2 months",
      },
      {
        title: " Freelance Graphic Designer- Okta",
        stage: "1 month",
      },
      {
        title: " Freelance Graphic Designer- PulseProMedia",
        stage: "1 month",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Higher Secondary-DAV MODEL School- 90%",
        stage: "2023",
      },
      {
        title:
          "BTech Computer Science Engineering - Guru Gobind Singh Indraprastha University",
        stage: "2023-2027",
      },
    ],
  },
];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";
const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 right-0 z:100"
      >
        <Avatar size={200} /> {/* You can adjust this size */}
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-white glow-effect"></span>
            Crafting <span className="text-accent glow-effect">code</span>{" "}
            <br />
            building futures{" "}
            <span
              className="text-accent"
              style={{ fontSize: "60px", fontWeight: "bold" }}
            >
              .
            </span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I am a passionate and driven Computer Science Engineering student
            currently pursuing my B.Tech degree at Delhi Technical Campus. Eager
            to embark on my journey in the world of technology, I am committed
            to acquiring knowledge and honing my skills to become a proficient
            professional in the field of computer science.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          ></motion.div>
        </div>
        {/*info  */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hover:text-red-500`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {item.stage && <div className="hidden md:flex">-</div>}
                  {item.stage && <div>{item.stage}</div>}
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="text-2xl text-white flex items-center hover:text-red-500"
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
