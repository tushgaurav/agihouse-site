"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Link
        href="/"
        className="font-extrabold text-[24px] text-white leading-[30px] z-10"
      >
        AGIHOUSE
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="https://defense.agihouse.in/"
          target="_blank"
          className="font-semibold text-[16px] text-gray-200 hover:text-white transition-colors duration-200 leading-[30px] z-10"
        >
          Defense Tech
        </Link>

        <Link
          href="https://lu.ma/agihouseindia" 
          target="_blank"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 rounded-lg font-semibold text-[16px] text-white leading-[20px] z-10"
        >
          Events
        </Link>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
