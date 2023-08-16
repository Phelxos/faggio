import { FC } from "react";
import ContextProvider from "./Context";

interface Props {
  children: React.ReactNode;
}

export const metadata = {
  themeColor: { media: "(prefers-color-scheme: dark)", color: "#047857" },
};

const Layout: FC<Props> = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default Layout;
