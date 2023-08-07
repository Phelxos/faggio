import { FC } from "react";
import Main from "../components/Main";
import Header from "../components/header/Header";
import Setup from "../components/setup/Setup";
import "../../styles/globals.scss";

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Setup>{children}</Setup>
      </Main>
    </>
  );
};

export default Layout;
