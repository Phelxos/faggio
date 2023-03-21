import React, { useEffect } from "react";
import Meta from "./Meta";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <Meta />
      <div className="relative flex h-fit w-screen flex-col">
        <Header />
        <Main>{children}</Main>
        <Modal />
      </div>
    </>
  );
}
