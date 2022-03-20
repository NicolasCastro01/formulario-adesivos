/* eslint-disable @typescript-eslint/no-unused-vars */

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import styled from "styled-components";
import FormSubmit from "../FormSubmit";
import Backdrop from "./Backdrop";

const Container = styled(motion.div)`
  position: absolute;
  z-index: 999;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  max-width: 400px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 1.2rem;
`;

const Content = styled.p`
  margin: 0;
  font-size: 0.9rem;
  margin: 10px 0 0 10px;
`;

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const MiddleAlertModal: React.FC<{
  title: string;
  content: string | string[];
  callback: () => void;
}> = ({ title, content, callback }): JSX.Element => {
  return (
    <>
      <Container
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Title>{title}</Title>
        {typeof content === "string" ? (
          <Content>{content}</Content>
        ) : (
          content.map(cont => <Content key={cont}>{cont}</Content>)
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FormSubmit submit={callback} label={"Entendido"} />
        </div>
      </Container>
      <Backdrop callback={callback} />
    </>
  );
};

export default MiddleAlertModal;
