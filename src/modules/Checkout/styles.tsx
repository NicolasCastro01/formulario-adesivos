import styled from "styled-components";

export const Container = styled.div``;

type justify =
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right"
  | "normal"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";

type align = "center" | "start" | "end" | "flex-start" | "flex-end";

type metrics = "px" | "rem" | "vw" | "vh";

export const FlexContainer = styled.div<{
  justify?: justify;
  gap?: `${number}${metrics}`;
  align?: align;
}>`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  gap: ${props => props.gap};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

export const Label = styled.h3`
  margin: 10px 0;
  font-size: 1rem;
  font-weight: 800;
`;

export const Item = styled.p<{ margin?: string }>`
  margin: ${props => props.margin || "5px 0 5px 10px"};
`;
