// components
import Circles from "/components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// animation variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* Text & Form Wrapper */}
        <div className="flex flex-col w-full max-w-[700px]">

          {/* Heading */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* Form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            {/* Name and Email Inputs */}
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="Name" className="input" />
              <input type="email" placeholder="Email" className="input" />
            </div>

            {/* Subject Input */}
            <input type="text" placeholder="Subject" className="input" />

            {/* Message Textarea */}
            <textarea placeholder="Message" className="textarea"></textarea>

            {/* Submit Button */}
            <button className="btn rounded-full border border-white/50 max-w-[170px] overflow-hidden hover:border-accent group relative">
              <span className="group-hover:translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s Talk
              </span>
              <BsArrowRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] opacity-0 group-hover:translate-y-[-50%] group-hover:opacity-100 transition-all duration-300 text-[22px]" />
            </button>
          </motion.form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
