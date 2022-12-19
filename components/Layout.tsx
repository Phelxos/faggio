import React from "react";
import Meta from "./Meta";
import Header from "./Header";
import Main from "./Main";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <Meta />
      <Header />
      <Main>{children}</Main>
    </>
  );
}
