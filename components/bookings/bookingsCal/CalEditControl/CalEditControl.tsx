import React, { useContext } from "react";
import CalEditControlButtons from "./CalEditControlButtons";
import CalEditControlInfo from "./CalEditControlInfo";
import { CBookings } from "../../../contexts/CBookings";

export default function CalEditControl() {
  const c = useContext(CBookings);
  return (
    !c?.isOpenModal && (
      <div
        className={`fixed right-2 bottom-2 z-50 flex items-center justify-between p-1 ${
          c?.isBeingEdited ? " w-full" : "w-fit"
        }`}
      >
        {c?.isBeingEdited ? <CalEditControlInfo /> : <div />}
        <CalEditControlButtons />
      </div>
    )
  );
}
