/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef } from "react";
import Wave1 from "../Waves/Wave1";
import Wave2 from "../Waves/Wave2";

import { Container, ContentDiv } from "./styles";

type metrics = "px" | "rem" | "vh" | "vw";

export interface ICardInterface {
  width?: `${number}${metrics}`;
  height?: `${number}${metrics}`;
  elevation?: number;
  color?: string;
  padding?: number;
  decorator?: "wave1" | "wave2" | null;
  initialAnimation?: string;
  exitAnimation?: string;
}

const Card: React.FC<ICardInterface> = ({
  children,
  decorator,
  initialAnimation,
  exitAnimation,
  ...props
}): JSX.Element => {
  const decorators = {
    wave1: <Wave1 />,
    wave2: <Wave2 />,
  };
  return (
    <Container
      {...props}
      initial={{ x: initialAnimation }}
      animate={{
        x: "0",
        transition: {
          duration: 0.25,
          type: "spring",
          damping: 25,
          stiffness: 500,
        },
      }}
      exit={{ x: exitAnimation }}
    >
      <ContentDiv>{children}</ContentDiv>
      {decorator && decorators[decorator]}
    </Container>
  );
};

export default Card;
