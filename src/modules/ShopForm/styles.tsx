import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  height: 161px;
`;

export const FormTitle = styled.h1<{
  bold?: boolean;
}>`
  font-size: "1.4rem";
  font-family: "Roboto";
  font-style: normal;
  font-weight: ${props => (props.bold ? 500 : 300)};
  color: white;
  margin: 0;
`;

export const FormContainer = styled.form``;

export const FormLabel = styled.label`
  font-size: 1rem;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  color: black;
  margin: 5px 0 10px 0;
  display: inline-block;
`;
