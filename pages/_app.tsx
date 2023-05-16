import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import ContextProvider from "../components/contexts/ContextProvider";
import useSetupData from "../hooks/useSetupData";
import usePhoneSize from "../hooks/usePhoneSize";
import { is } from "date-fns/locale";

export default function App({ Component, pageProps }: AppProps) {
  const isHydrated = useSetupData();
  const isNotTheRightSize = usePhoneSize();

  if (isNotTheRightSize) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
        <p className="w-2/3 text-2xl font-light text-slate-400/75">
          This app is <span className="font-bold">only available</span> on the
          size of an iPhone SE.
        </p>
        <p className="w-2/3 text-2xl font-thin text-slate-400/75">
          Please, set the browser window to{" "}
          <span className="font-light">375px x 667px</span> by choosing{" "}
          <span className="px-2 py-1 italic highlight highlight-slate-100 highlight-variant-1">
            iPhone SE
          </span>{" "}
          as the dimensions in the browser&apos;s developer tools.
        </p>
      </div>
    );
  }

  if (isHydrated) {
    return (
      <>
        <ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ContextProvider>
      </>
    );
  }

  return null;
}
