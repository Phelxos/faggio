import { Metadata } from "next";
import { FC } from "react";
import "../styles/globals.scss";
import ToastContainer from "./components/toasts/Container";

export const metadata: Metadata = {
  title: "Faggio",
  description: "Mit Faggio wissen Sie, wer wann im Büro ist.",
  viewport: { width: "device-width", initialScale: 1 },
  icons: { icon: "/favicon.ico" },
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#334454" },
};

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="de">
      <body className="scrollbar-hide relative flex h-screen w-screen flex-col">
        {children}
        <ToastContainer />
      </body>
    </html>
  );
};

export default Layout;
