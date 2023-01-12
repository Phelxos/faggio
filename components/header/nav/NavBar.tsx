import React from "react";
import NavItem from "./NavItem";
import TPageTitle from "../../../typings/types/TPageTitle";

const pages: TPageTitle[] = ["", "calendar", "bookings", "teams", "offices"];

export default function NavBar() {
  return (
    <nav className="flex w-full items-center justify-around bg-slate-800 shadow-lg">
      {pages.map((title: TPageTitle, i: number) => {
        return <NavItem pageTitle={title} key={i} />;
      })}
    </nav>
  );
}
