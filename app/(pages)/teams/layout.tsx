import { FC } from "react";
import ContextProvider from "./Context";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default Layout;
