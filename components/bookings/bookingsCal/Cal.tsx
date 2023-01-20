import React, { useContext } from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";
import { CBookings } from "../../contexts/CBookings";

export default function Calendar() {
  const c = useContext(CBookings);
  return (
    <div
      className={`flex h-[485px] w-full flex-col rounded-lg border-[6px] ${
        c?.isBeingEdited ? "border-emerald-300" : "border-emerald-900"
      } bg-slate-700`}
    >
      <CalHeader />
      <CalBody />
      <CalFooter />
    </div>
  );
}
