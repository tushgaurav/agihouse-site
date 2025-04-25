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

      <Link
        href="https://lu.ma/agihouseindia"
        target="_blank"
        className="font-extrabold text-[18px] text-white leading-[30px] z-10"
      >
        Events
      </Link>
    </div>
  </motion.nav>
);

export default Navbar;
