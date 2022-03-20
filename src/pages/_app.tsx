import type { AppProps } from "next/app";
import Head from "next/head";

import { AppContextProvider } from "../common/context/appContext";
import FormLayout from "../common/layouts/FormLayout";

import "../styles/styles.css";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Formulário Adesivos</title>
      </Head>
      <FormLayout>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </FormLayout>
    </>
  );
};

export default App;
