
import { motion } from "framer-motion";
import { BsLinkedin, BsMedium, BsGooglePlay } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import portfolioImg from "/portfolio.jpeg";
import { useActiveSection } from "../signals/active-section-signal";


export default function Intro() {
  const ref = useActiveSection("Home");
  return (
    <section
      id="home"
      ref={ref}
      className="mb-16 sm:mb-0 scroll-mt-[100rem] particles-section pt-28 pb-14 sm:pt-36 sm:pb-18 w-full px-4"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
        {/* pop img on initial load */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img
              src={portfolioImg}
              alt="Ricardo portrait"
              width="192"
              height="192"
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

        </div>
      </div>
        {/* opacity fade in on initial load */}
      <motion.h1
        className="mb-10 mt-4 px-0 sm:px-4 text-2xl font-medium sm:text-4xl text-black dark:text-white max-w-[50rem] mx-auto flex flex-col items-start font-sans"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-thin text-4xl">Hi, my name is</span>
        <span className="font-bold text-5xl font-sans">Ilyas Wadjinny</span>
        <span className="font-bold mt-6 inline">I'm a Data engineer, Software Engineer</span>
        <span className="font-light text-2xl mt-6">
         I'm a Daily programmer, specializing in building and developing novel tools, to help me and others in day to day life.
I am also interested in almost all aspects of technology: Web dev, Mobile dev, Game dev, Web scrapping, Graphic programming 
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack text-gray-950"
          href="https://github.com/Wadjinny"
          target="_blank"
        >
          GitHub <FaGithub className="dark:opacity-70" />
        </a>

        <a
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          href="https://www.linkedin.com/in/ilyas-wadjinny/"
          target="_blank"
        >
          <span className="dark:opacity-70">LinkedIn</span>
          <BsLinkedin className="dark:opacity-70" />
        </a>
        <a
          href="https://medium.com/@ilyas.wadjinny"
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          target="_blank"
        >
          <span className="dark:opacity-70">Medium</span>
          <BsMedium className="dark:opacity-70" />
        </a>
        <a
          href="https://play.google.com/store/apps/dev?id=7483698372592272765&hl"
          className="group bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40"
          target="_blank"
        >
          <span className="dark:opacity-70">Play Store</span>
          <BsGooglePlay className="dark:opacity-70" />
        </a>
      </motion.div>
    </section>
  );
}
