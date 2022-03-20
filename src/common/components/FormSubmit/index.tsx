/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import { ButtonLabel, Container } from "./styles";

const checkboxVariants = {
  hover: { scale: 1.05 },
  pressed: { scale: 0.9 },
};

const FormSubmit: React.FC<{ submit: () => void; label?: string }> = ({
  submit,
  label,
}): JSX.Element => {
  return (
    <Container
      onClick={e => {
        submit();
        e.preventDefault();
      }}
      whileHover="hover"
      whileTap="pressed"
      variants={checkboxVariants}
    >
      <ButtonLabel>{label || "Enviar"}</ButtonLabel>
    </Container>
  );
};

export default FormSubmit;
