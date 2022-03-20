/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext, useState } from "react";
import Separator from "../../common/components/Separator";
import AppContext from "../../common/context/appContext";
import CheckBox from "../../common/components/CheckBox";
import FormSubmit from "../../common/components/FormSubmit";
import NumberInput from "../../common/components/NumberInput";
import TextArea from "../../common/components/TextArea";
import {
  Container,
  FormContainer,
  HeaderContainer,
  FormTitle,
  FormLabel,
} from "./styles";

const ShopForm: React.FC = (): JSX.Element => {
  const { form, setForm, validateForm } = useContext(AppContext);
  const [invalids, setInvalids] = useState<string[]>([]);
  const updateStickers = (label: string, checked: boolean) => {
    if (checked) {
      setForm({
        ...form,
        stickers: form.stickers.filter(f => f !== label),
      });
    } else {
      setForm({
        ...form,
        stickers: [...form.stickers, label],
      });
    }
  };
  return (
    <Container>
      <HeaderContainer>
        <FormTitle>Formulário</FormTitle>
        <FormTitle>para compra de</FormTitle>
        <FormTitle bold>Pacote de Adesivos</FormTitle>
      </HeaderContainer>
      <FormContainer>
        <FormLabel>Quais Adesivos?</FormLabel>
        <CheckBox label="React" toggle={updateStickers} />
        <CheckBox label="Vue" toggle={updateStickers} />
        <CheckBox label="Angular" toggle={updateStickers} />
        <Separator height="20px" />
        <FormLabel>Quantos adesivos de cada?</FormLabel>
        <NumberInput
          setValue={amount => setForm({ ...form, amount: amount })}
          value={form.amount}
        />
        <Separator height="20px" />
        <FormLabel>Observaçoes:</FormLabel> <br />
        <TextArea
          notes={form.notes}
          setNotes={notes => setForm({ ...form, notes: notes })}
        />
        <Separator height="20px" />
        <div style={{ display: "flex", justifyContent: "right" }}>
          <FormSubmit submit={validateForm} />
        </div>
      </FormContainer>

      {form && invalids.map(inv => <p key={inv}>{inv}</p>)}
    </Container>
  );
};

export default ShopForm;
