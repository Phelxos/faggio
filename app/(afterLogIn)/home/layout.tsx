import { FC } from "react";
import Setup from "../../components/setup/Setup";
import "../../../styles/globals.scss";

interface Props {
  children: React.ReactNode;
}
const Layout: FC<Props> = ({ children }) => {
  return <div className="grid grid-cols-12 gap-y-16">{children}</div>;
};

export default Layout;
