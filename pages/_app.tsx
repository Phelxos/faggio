import "../styles/globals.scss";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../components/contexts/ContextProvider";
import useSetupData from "../hooks/useSetupData";

export default function App({ Component, pageProps }: AppProps) {
  useSetupData();
  const [isHydrated, setIsHydrated] = useState(false);

  // wait till NextJS rehydration completes
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <Layout>
          <ContextProvider>
            <Component {...pageProps} />
          </ContextProvider>
        </Layout>
      ) : null}
    </>
  );
}
