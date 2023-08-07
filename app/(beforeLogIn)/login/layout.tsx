import { FC } from "react";
import Setup from "../../components/setup/Setup";
import "../../../styles/globals.scss";

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return <Setup>{children}</Setup>;
};

export default Layout;
