/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import Box from "./Box";

import { Container, Label } from "./styles";

const CheckBox: React.FC<{
  label: string;
  toggle: (label: string, checked: boolean) => void;
}> = ({ label, toggle }): JSX.Element => {
  const [isChecked, setChecked] = useState(false);
  const toggleChecked = () => {
    toggle(label, isChecked);
    setChecked(!isChecked);
  };
  return (
    <Container>
      <Box isChecked={isChecked} setChecked={toggleChecked} />
      <Label style={{ margin: 0 }} onClick={toggleChecked}>
        {label}
      </Label>
    </Container>
  );
};

export default CheckBox;
