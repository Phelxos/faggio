import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../components/contexts/ContextProvider";
import useSetupData from "../hooks/useSetupData";

export default function App({ Component, pageProps }: AppProps) {
  useSetupData();

  return (
    <Layout>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </Layout>
  );
}
