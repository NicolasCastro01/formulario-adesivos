/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */

const Line: React.FC<{
  width: string;
  height: string;
  background: string;
  margin?: string;
}> = ({ width, height, background, margin }): JSX.Element => {
  return (
    <div
      style={{
        width,
        height,
        background,
        margin,
        borderRadius: "5px",
      }}
    />
  );
};

export default Line;
