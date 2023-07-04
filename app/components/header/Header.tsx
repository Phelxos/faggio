import { FC } from "react";
import Nav from "./elements/navigation/Nav";
import Status from "./elements/status-bar/Status";

const Header: FC = () => {
  return (
    <header>
      <Status />
      <Nav />
    </header>
  );
};

export default Header;
