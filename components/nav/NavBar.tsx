import React from "react";
import NavItem from "./NavItem";
import TPageTitle from "../../typings/types/TPageTitle";

const pages: TPageTitle[] = [
  "home",
  "calendar",
  "bookings",
  "teams",
  "offices",
];

export default function NavBar() {
  return (
    <nav className="w-full flex items-center justify-around bg-emerald-900 shadow-lg">
      {pages.map((title: TPageTitle, i: number) => {
        return <NavItem pageTitle={title} key={i} />;
      })}
    </nav>
  );
}
