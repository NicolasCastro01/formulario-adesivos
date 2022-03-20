import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  input[type="number"] {
    -moz-appearance: textfield;
  }
  width: fit-content;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 9px -1px rgba(0, 0, 0, 0.25);
  margin-left: 10px;
`;

export const StyledInput = styled.input`
  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  border: none;
  width: 90px;
  text-align: center;
`;

export const ControlledButton = styled.button`
  cursor: pointer;
  border: none;
  width: 30px;
  height: 30px;
  background-color: transparent;
  transition: 0.25s;
  :hover {
    background-color: rgba(100, 100, 100, 0.1);
  }

  font-weight: 500;
`;
