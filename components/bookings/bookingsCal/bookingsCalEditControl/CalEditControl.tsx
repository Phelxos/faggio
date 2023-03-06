import React, { useContext } from "react";
import CalEditControlButtons from "./CalEditControlButtons";
import CalEditControlInfo from "./CalEditControlInfo";
import { CBookings } from "../../../contexts/CBookings";

export default function CalEditControl() {
  const c = useContext(CBookings);
  return (
    <div className="fixed right-2 bottom-2 z-50 flex w-full items-center justify-between p-1">
      {c?.isBeingEdited ? <CalEditControlInfo /> : <div />}
      <CalEditControlButtons />
    </div>
  );
}
