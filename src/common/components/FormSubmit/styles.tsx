import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.button)<{ background: string }>`
  background-color: ${props => props.background};
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 7px 2px rgb(0 0 0 / 35%);
  cursor: pointer;
  padding: 5px 30px;
  transition: filter 0.25s;
  :hover {
    filter: brightness(1.1);
  }
`;

export const ButtonLabel = styled.p<{ textColor: string }>`
  color: ${props => props.textColor};
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 1rem;
  line-height: 28px;
  letter-spacing: 0.045em;

  margin: 0;
`;
