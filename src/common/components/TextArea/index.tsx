/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";

import { Container } from "./styles";

const TextArea: React.FC<{
  notes: string;
  setNotes: (notes: string) => void;
  placeholder?: string;
}> = ({ notes, setNotes, placeholder }): JSX.Element => {
  return (
    <Container
      value={notes}
      placeholder={placeholder || "Alguma Dúvida? Recado?"}
      onChange={e => {
        setNotes(e.target.value);
      }}
    ></Container>
  );
};

export default TextArea;
