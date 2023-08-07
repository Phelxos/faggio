"use client";

import { Transition } from "@headlessui/react";
import { FC, useContext } from "react";
import { Context as BookingsContext } from "../../Context";
import Buttons from "./elements/Buttons";
import Info from "./elements/Info";

const Control: FC = () => {
  const c = useContext(BookingsContext);
  return !c?.isOpenModal ? (
    <>
      <Transition
        show={c?.isBeingEdited}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Info />
      </Transition>
      <Buttons />
    </>
  ) : (
    <></>
  );
};

export default Control;
