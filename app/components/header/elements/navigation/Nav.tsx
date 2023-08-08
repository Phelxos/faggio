import { FC } from "react";
import NavItem from "./elements/Item";
import TPageTitle from "../../../../../typings/types/TPageTitle";

const pages: TPageTitle[] = ["", "bookings", "teams", "offices"];

const Nav: FC = () => {
  return (
    <nav className="flex w-full items-center justify-around bg-slate-800 shadow-lg">
      {pages.map((title: TPageTitle, i: number) => {
        return <NavItem pageTitle={title} key={i} />;
      })}
    </nav>
  );
};

export default Nav;
