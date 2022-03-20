/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef } from "react";
import Wave1 from "../Waves/Wave1";

import { Container, ContentDiv } from "./styles";

type metrics = "px" | "rem" | "vh" | "vw";

export interface ICardInterface {
  width?: `${number}${metrics}`;
  height?: `${number}${metrics}`;
  elevation?: number;
  color?: string;
  padding?: number;
  decorator?: "wave1" | null;
}

const Card: React.FC<ICardInterface> = ({
  children,
  decorator,
  ...props
}): JSX.Element => {
  const decorators = {
    wave1: <Wave1 />,
  };
  return (
    <Container {...props}>
      <ContentDiv>{children}</ContentDiv>
      {decorator && decorators[decorator]}
    </Container>
  );
};

export default Card;
