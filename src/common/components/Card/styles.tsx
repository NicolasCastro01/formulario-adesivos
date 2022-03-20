import { motion } from "framer-motion";
import styled from "styled-components";
import { ICardInterface } from ".";

export const Container = styled(motion.div)<ICardInterface>`
  position: absolute;
  background-color: ${props => props.color || "white"};
  box-shadow: ${props =>
    `0px 0px 20px ${props.elevation || 0}px rgba(0,0,0,.25)`};
  border-radius: 5px;
  width: ${props => props.width};
  height: ${props => props.height};
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  z-index: 0;
`;

export const ContentDiv = styled.div<{ padding?: number }>`
  padding: ${props => `${props.padding || 30}px`};
  z-index: 5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
