import React, { useContext } from "react";
import CalEditControlButtons from "./CalEditControlButtons";
import CalEditControlInfo from "./CalEditControlInfo";
import { CBookings } from "../../../contexts/CBookings";

export default function CalEditControl() {
  const c = useContext(CBookings);
  return (
    <div className="fixed right-0 bottom-0 z-50 flex w-full items-center justify-between border-2 p-1">
      {c?.isBeingEdited ? <CalEditControlInfo /> : <div />}
      <CalEditControlButtons />
    </div>
  );
}
