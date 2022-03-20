/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext } from "react";
import FormSubmit from "../../common/components/FormSubmit";
import Line from "../../common/components/Line";
import Separator from "../../common/components/Separator";
import AppContext from "../../common/context/appContext";
import { Container, FlexContainer, Item, Label, Title } from "./styles";

const Checkout: React.FC = (): JSX.Element => {
  const { form, setCurrentPage, success } = useContext(AppContext);
  return (
    <Container>
      <Title>Detalhes do Pedido</Title>
      <Label>Adesivos:</Label>
      {form.stickers.map(sticker => (
        <Item key={sticker}>
          - {sticker} ({form.amount}x)
        </Item>
      ))}
      <Label>Observações:</Label>
      <Item>{form.notes || "Não foi feita nenhuma observaçao."}</Item>
      <FlexContainer justify="center">
        <Line
          background="rgba(0,0,0,0.33)"
          height="2px"
          width="95%"
          margin="10px"
        />
      </FlexContainer>

      <Label>Informações de Entrega:</Label>
      <Item>Endereço: Lorem Ipsum</Item>
      <FlexContainer gap="10px" align="center">
        <Item>Cidade: Porto Alegre</Item>
        <Line height="20px" width="2px" background="rgba(0,0,0,0.33)" />
        <Item margin="0">Estado: RS</Item>
      </FlexContainer>
      <Item>Telefone: (51) 9 9999-9999</Item>
      <Separator height="50px" />
      <FlexContainer gap="10px" justify="center">
        <FormSubmit
          submit={() => {
            setCurrentPage(0);
          }}
          label="Voltar"
          background="white"
          textColor="black"
        />
        <FormSubmit submit={success} label="Concluir Pedido" />
      </FlexContainer>
    </Container>
  );
};

export default Checkout;
