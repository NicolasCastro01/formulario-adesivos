/* eslint-disable @typescript-eslint/no-unused-vars */

import { motion } from "framer-motion";
import React from "react";

/* import { Container } from "./styles"; */

const Backdrop: React.FC<{ callback: () => void }> = ({
  callback,
}): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={callback}
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        zIndex: 10,
      }}
    />
  );
};

export default Backdrop;
