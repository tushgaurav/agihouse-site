"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";

const ExploreCard = ({
  id,
  imgUrl,
  title,
  description,
  index,
  active,
  handleClick,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer visible`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover object-left rounded-[24px]"
      fill
    />

    {active !== id ? (
      <div className="absolute w-full h-full bg-gradient-to-t from-black/60 to-transparent rounded-[24px] flex items-center justify-center">
        <h3 className="font-bold sm:text-[26px] text-[18px] text-white lg:absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {title}
        </h3>
      </div>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-b-[24px] text-center lg:text-left">
        <h2 className="mt-[24px] font-bold sm:text-[32px] text-[24px] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {title}
        </h2>
        <p className="font-medium text-[16px] leading-[20.16px] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {description}
        </p>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
