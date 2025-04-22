"use client";

import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

export function Page({ children }) {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div>{children}</div>
    </motion.div>
  );
}

export function PageTitle({ children }) {
  return <h1 className="text-4xl font-bold text-white mb-6">{children}</h1>;
}
