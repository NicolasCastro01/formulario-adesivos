import { createContext, useEffect, useState } from "react";
import MiddleAlertModal, {
  Content,
} from "../components/Modal/MiddleAlertModal";

export interface Form {
  stickers: string[];
  amount: number;
  notes: string;
}

interface AppContextInterface {
  form: Form;
  setForm(form: Form): void;
  validateForm(): void;
  currentPage: number;
  setCurrentPage(page: number): void;
  modal: JSX.Element;
  success(): void;
}

const AppContext = createContext<AppContextInterface>(null);

export const AppContextProvider: React.FC = ({ children }) => {
  const [invalids, setInvalids] = useState<string[]>([]);
  const modals = {
    invalids: (
      <MiddleAlertModal
        title="Configuração Inválida"
        content={invalids}
        callback={() => {
          setInvalids([]);
          setModal(null);
        }}
      />
    ),
    success: (
      <MiddleAlertModal
        title="Compra Realizada com Sucesso!"
        content={[
          "Clique para voltar a página inical",
          <Content key="link">
            Acesse também o meu{" "}
            <a
              href="https://pedrobzzdev.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              site
            </a>
            .
          </Content>,
        ]}
        callback={() => {
          setModal(null);
          setCurrentPage(0);
          setForm({
            stickers: [],
            amount: 1,
            notes: "",
          });
        }}
      />
    ),
  };
  useEffect(() => {
    if (invalids.length) setModal(modals["invalids"]);
  }, [invalids]);

  const [modal, setModal] = useState<JSX.Element>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const validateForm = async () => {
    console.log(form);
    const newInvalids = [];
    if (form.stickers.length === 0) {
      newInvalids.push(
        "Você deve escolher, pelo menos, um adesivo para continuar com o pedido.",
      );
    }
    if (form.amount === 0) {
      newInvalids.push(
        "Para finalizar o pedido é necessario especificar uma quantidade",
      );
    }
    setInvalids(newInvalids);
    setForm({
      ...form,
      stickers: form.stickers.reduce((arr, sticker) => {
        if (arr.includes(sticker)) return arr;
        return [...arr, sticker];
      }, []),
    });
    if (!newInvalids.length) return setCurrentPage(1);
  };
  const [form, setForm] = useState<Form>({
    stickers: [],
    amount: 1,
    notes: "",
  });
  return (
    <AppContext.Provider
      value={{
        form,
        setForm,
        validateForm,
        currentPage,
        setCurrentPage,
        modal,
        success: () => {
          setModal(modals["success"]);
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
