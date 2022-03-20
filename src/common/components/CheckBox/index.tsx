/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext, useState } from "react";
import AppContext from "../../context/appContext";
import Box from "./Box";

import { Container, Label } from "./styles";

const CheckBox: React.FC<{
  label: string;
  toggle: (label: string, checked: boolean) => void;
  defaultValue?: boolean;
}> = ({ label, toggle, defaultValue }): JSX.Element => {
  const [isChecked, setChecked] = useState(defaultValue || false);
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
