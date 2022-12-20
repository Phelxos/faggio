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
      <div className="flex h-screen w-screen flex-col">
        <Header />
        <Main>{children}</Main>
      </div>
    </>
  );
}
