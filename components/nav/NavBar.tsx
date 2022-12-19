import React from "react";
import NavItem from "./NavItem";
import TPageTitle from "../../typings/types/TPageTitle";

const pages: TPageTitle[] = ["", "calendar", "bookings", "team", "offices"];

export default function NavBar() {
  return (
    <nav>
      {pages.map((title: TPageTitle, i: number) => {
        return <NavItem pageTitle={title} key={i} />;
      })}
    </nav>
  );
}
