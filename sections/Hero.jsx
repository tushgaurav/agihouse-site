"use client";

import { motion } from "framer-motion";
import { usePostHog } from "posthog-js/react";
import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Link from "next/link";

export default function Hero() {
  const posthog = usePostHog();

  return (
    <section
      className={`${styles.yPaddings} flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth2} mx-auto flex flex-col max-w-[1440px] w-full`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center">
          <motion.div
            variants={textVariant(1.1)}
            className="flex flex-col items-center mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-center relative">
              <span className="bg-gradient-to-br from-white via-gray-200 to-gray-100 bg-clip-text text-transparent drop-shadow-lg">
                AGI
              </span>
              <span className="relative ml-2 sm:ml-4 inline-flex flex-col">
                <span className="bg-gradient-to-br from-gray-100 via-white to-gray-200 bg-clip-text text-transparent drop-shadow-lg">
                  HOUSE
                </span>
                <span className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 right-0 text-xs sm:text-sm md:text-base lg:text-lg font-light tracking-[0.2em] text-gray-400 flex items-center gap-1 sm:gap-2">
                  <img
                    src="https://flagcdn.com/w40/in.png"
                    alt="Indian Flag"
                    className="w-3 h-2 sm:w-4 sm:h-3 md:w-5 md:h-3 lg:w-6 lg:h-4 inline-block"
                  />
                  <span className="animate-pulse">INDIA</span>
                </span>
              </span>
            </h1>
          </motion.div>
          <motion.p
            variants={textVariant(1.2)}
            className="mt-8 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl text-center px-4"
          >
            India's premier AI-native innovation residence and venture ecosystem
          </motion.p>

          <motion.div variants={textVariant(1.25)} className="mt-8">
            <Link
              onClick={() => {
                posthog.capture("user_clicked_join", {
                  location: "hero",
                })
              }}
              href="/join"
              className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Join Now
            </Link>
          </motion.div>

          <motion.div
            variants={textVariant(1.3)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-12 px-4 w-full max-w-7xl"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 sm:p-6 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                20K+
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Community Members
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 sm:p-6 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                ₹400Cr+
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Investments Raised
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 sm:p-6 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">
                100+
              </h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Events Hosted
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 sm:p-6 backdrop-blur-lg bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-white">25+</h3>
              <p className="text-gray-400 mt-2 text-sm sm:text-base">
                Partner Companies
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full mt-12 sm:mt-16 px-4"
        >
          <div className="absolute w-full h-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl blur-3xl" />
          <img
            src="/cover.png"
            alt="AGI House India Innovation"
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-2xl shadow-2xl z-10 relative"
          />

          <motion.div
            className="absolute -bottom-5 sm:-bottom-10 right-5 sm:right-10 z-20"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <a
              href="#explore"
              className="bg-white/5 backdrop-blur-lg rounded-full p-3 sm:p-4 flex items-center gap-2 hover:bg-white/10 transition-all border border-white/10"
            >
              <span className="text-white text-sm sm:text-base">
                Explore More
              </span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-6 sm:w-6 text-white"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
