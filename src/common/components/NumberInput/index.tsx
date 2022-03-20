/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";

import { Container, ControlledButton, StyledInput } from "./styles";

const NumberInput: React.FC<{
  value: number;
  setValue: (value: number) => void;
}> = ({ value, setValue }): JSX.Element => {
  const updateValue = (value: number) => {
    setValue(value);
  };
  return (
    <Container>
      <ControlledButton
        onClick={e => {
          updateValue(value !== 0 ? value - 1 : value);
          e.preventDefault();
        }}
      >
        -
      </ControlledButton>
      <StyledInput
        type="number"
        value={value}
        onChange={e => {
          const inputValue = parseInt(e.target.value);
          updateValue(
            inputValue >= 0 && inputValue <= 999
              ? parseInt(e.target.value)
              : null,
          );
        }}
        onBlur={() => {
          if (!value) return updateValue(0);
        }}
      />
      <ControlledButton
        onClick={e => {
          updateValue(value + 1);
          e.preventDefault();
        }}
      >
        +
      </ControlledButton>
    </Container>
  );
};

export default NumberInput;
