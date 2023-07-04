import { FC } from "react";
import Main from "./components/Main";
import Header from "./components/header/Header";
import Setup from "./components/setup/Setup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faggio",
  description: "Mit Faggio wissen Sie, wer wann im Büro ist.",
};

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="relative flex h-fit w-screen flex-col">
        <Header />
        <Main>
          <Setup>{children}</Setup>
        </Main>
      </body>
    </html>
  );
};

export default Layout;
