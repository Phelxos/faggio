"use client";

import { Transition } from "@headlessui/react";
import { FC, useContext } from "react";
import { CBookings } from "../../../../../components/contexts/BookingsContext";
import Buttons from "./elements/Buttons";
import Info from "./elements/Info";

const Control: FC = () => {
  const c = useContext(CBookings);
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
