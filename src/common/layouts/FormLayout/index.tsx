import { Container } from "./styles";

const FormLayout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default FormLayout;
