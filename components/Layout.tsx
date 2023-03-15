import React, { useEffect } from "react";
import Meta from "./Meta";
import Header from "./Header";
import Main from "./Main";
import Modal from "./modals/Modal";
import useModal from "../hooks/useModal";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { isDisplayingModal } = useModal();
  useEffect(() => {
    console.log(
      "🚀 ~ file: useModal.ts:5 ~ useModal ~ isDisplayingModal:",
      isDisplayingModal
    );
  }, []);

  return (
    <>
      <Meta />
      <div className="relative flex h-fit w-screen flex-col">
        <Header />
        <Main>{children}</Main>
        {isDisplayingModal && <Modal />}
      </div>
    </>
  );
}
