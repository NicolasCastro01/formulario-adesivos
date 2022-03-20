/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import Card from "../common/components/Card";
import Backdrop from "../common/components/Modal/Backdrop";
import MiddleAlertModal from "../common/components/Modal/MiddleAlertModal";
import AppContext from "../common/context/appContext";
import useWindowSize from "../common/hooks/useWindowSize";
import Checkout from "../modules/Checkout";
import ShopForm from "../modules/ShopForm";

const Home = (): JSX.Element => {
  const { currentPage, modal } = useContext(AppContext);
  const { width } = useWindowSize();
  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modal}
      </AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {currentPage === 0 && (
          <Card
            height="780px"
            width="540px"
            decorator="wave1"
            initialAnimation={width > 540 ? "-200vh" : "0"}
            exitAnimation={width > 540 ? "-200vh" : "0"}
          >
            <ShopForm />
          </Card>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {currentPage === 1 && (
          <Card
            height="780px"
            width="540px"
            decorator="wave2"
            initialAnimation={width > 540 ? "200vh" : "0"}
            exitAnimation={width > 540 ? "200vh" : "0"}
          >
            <Checkout />
          </Card>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
