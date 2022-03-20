/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import { ButtonLabel, Container } from "./styles";

const checkboxVariants = {
  hover: { scale: 1.05 },
  pressed: { scale: 0.9 },
};

const FormSubmit: React.FC<{
  submit: () => void;
  label?: string;
  background?: string;
  textColor?: string;
}> = ({ submit, label, background, textColor }): JSX.Element => {
  return (
    <Container
      background={background || "#8a2be2"}
      onClick={e => {
        submit();
        e.preventDefault();
      }}
      whileHover="hover"
      whileTap="pressed"
      variants={checkboxVariants}
    >
      <ButtonLabel textColor={textColor || "white"}>
        {label || "Enviar"}
      </ButtonLabel>
    </Container>
  );
};

export default FormSubmit;
