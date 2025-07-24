//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              My Projects <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Explore my projects—crafted with precision, creativity, and a
              passion for problem-solving. Check out my best work below! 💡✨
              {/* List - Hidden on small screens, visible on large screens */}
              <ul className="hidden lg:block space-y-2">
                <li>
                  <span className="font-semibold">• Weather App</span> —
                  <span className="font-light">
                    {" "}
                    HTML,CSS,JS, API Integration
                  </span>
                </li>
                <li>
                  <span className="font-semibold">• Code Tracker</span> —
                  <span className="font-light">
                    {" "}
                    React.js, Node.js, Express.js, APIS(GraphQL,Web Scraping)
                  </span>
                </li>
                <li>
                  <span className="font-semibold">• 3D Experience</span> —
                  <span className="font-light">
                    {" "}
                    Three.js, React Three Fiber
                  </span>
                </li>
                <li>
                  <span className="font-semibold">• Portfolio</span> —
                  <span className="font-light">
                    {" "}
                    React, Framer Motion, Tailwind CSS
                  </span>
                </li>
              </ul>
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
