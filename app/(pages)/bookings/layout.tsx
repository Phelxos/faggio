import { FC } from "react";
import BookingsContextProvider from "../../../components/contexts/BookingsContext";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return <BookingsContextProvider>{children}</BookingsContextProvider>;
};

export default Layout;
