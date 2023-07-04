import { FC } from "react";
import Main from "./components/Main";
import Header from "./components/header/Header";
import Setup from "./components/setup/Setup";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <html lang="de">
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
