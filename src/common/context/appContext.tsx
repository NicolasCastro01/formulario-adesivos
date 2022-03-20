import { createContext, useState } from "react";

export interface Form {
  stickers: string[];
  amount: number;
  notes: string;
}

interface AppContextInterface {
  form: Form;
  setForm(form: Form): void;
  validateForm(): void;
  invalids: string[];
  setInvalids(invalids: string[]): void;
  currentPage: number;
  setCurrentPage(page: number): void;
}

const AppContext = createContext<AppContextInterface>(null);

export const AppContextProvider: React.FC = ({ children }) => {
  const [invalids, setInvalids] = useState<string[]>([]);
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
    if (!newInvalids.length) setCurrentPage(1);
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
        invalids,
        setInvalids,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
