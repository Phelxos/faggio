import React, { useContext } from "react";
import CalEditControlButtons from "./CalEditControlButtons";
import CalEditControlInfo from "./CalEditControlInfo";
import { CBookings } from "../../../contexts/CBookings";
import { Transition } from "@headlessui/react";

export default function CalEditControl() {
  const c = useContext(CBookings);
  return (
    !c?.isOpenModal && (
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
          <CalEditControlInfo />
        </Transition>
        <CalEditControlButtons />
      </>
    )
  );
}
