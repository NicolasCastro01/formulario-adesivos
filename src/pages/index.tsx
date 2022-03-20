/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import Card from "../common/components/Card";
import Backdrop from "../common/components/Modal/Backdrop";
import MiddleAlertModal from "../common/components/Modal/MiddleAlertModal";
import AppContext from "../common/context/appContext";
import ShopForm from "../modules/ShopForm";

const Home = (): JSX.Element => {
  const { form, invalids, setForm, validateForm, setInvalids } =
    useContext(AppContext);
  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {invalids.length > 0 && (
          <MiddleAlertModal
            title="Configuração Inválida"
            content={invalids}
            callback={() => {
              setInvalids([]);
            }}
          />
        )}
      </AnimatePresence>

      <Card height="780px" width="540px" decorator="wave1">
        <ShopForm />
      </Card>
    </>
  );
};

export default Home;
