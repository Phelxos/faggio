import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../components/contexts/ContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}
