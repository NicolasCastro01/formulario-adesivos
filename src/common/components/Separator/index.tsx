/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

/* import { Container } from "./styles"; */
type metrics = "px" | "rem" | "vh" | "vw";
const Separator: React.FC<{
  height?: `${number}${metrics}`;
  width?: `${number}${metrics}`;
}> = ({ height, width }): JSX.Element => {
  return <div style={{ height, width }}></div>;
};

export default Separator;
