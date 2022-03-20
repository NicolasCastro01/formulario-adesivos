/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const checkVariants = {
  pressed: (isChecked: boolean) => ({
    pathLength: isChecked ? 0.85 : 0.2,
    strokeWidth: 2,
  }),
  checked: { pathLength: 1, strokeWidth: 3 },
  unchecked: { pathLength: 0, strokeWidth: 3 },
  hover: { scale: 1.1, strokeWidth: 4 },
};

const checkboxVariants = {
  hover: { fill: "transparent", scale: 1.05, strokeWidth: 4 },
  pressed: { fill: "transparent", scale: 0.95, strokeWidth: 2 },
  checked: { fill: "transparent", stroke: "#8A2BE2", strokeWidth: 3 },
  unchecked: { fill: "transparent", stroke: "#ddd", strokeWidth: 3 },
};

const Box: React.FC<{
  isChecked: boolean;
  setChecked: (check: boolean) => void;
}> = (props): JSX.Element => {
  const { isChecked, setChecked } = props;
  const pathLength = useMotionValue(isChecked ? 1 : 0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);
  return (
    <motion.svg
      initial={false}
      animate={isChecked ? "checked" : "unchecked"}
      whileHover="hover"
      whileTap="pressed"
      width="30"
      height="30"
      onClick={() => setChecked(!isChecked)}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 21V9C5 6.79086 6.79086 5 9 5H21C23.2091 5 25 6.79086 25 9V21C25 23.2091 23.2091 25 21 25H9C6.79086 25 5 23.2091 5 21Z"
        variants={checkboxVariants}
      />
      <motion.path
        d="M4 17L11.8306 24.8306C12.7045 25.7045 14.1539 25.5845 14.8723 24.5788L26 9"
        fill="transparent"
        stroke="white"
        strokeLinecap="round"
        variants={checkVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
      />
      <motion.path
        d="M4 16L11.8306 23.8306C12.7045 24.7045 14.1539 24.5845 14.8723 23.5788L26 8"
        fill="transparent"
        stroke="#FF008C"
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={checkVariants}
        style={{ pathLength, opacity }}
        custom={isChecked}
      />
    </motion.svg>
  );
};

export default Box;
