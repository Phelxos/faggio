import React, { useContext } from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";
import MyBookingHeader from "../bookingsMy/MyBookingHeader";
import MyBooking from "../bookingsMy/MyBooking";
import { CBookings } from "../../contexts/CBookings";

export default function Calendar() {
  const c = useContext(CBookings);
  return (
    <div>
      <div className="flex h-[475px] w-full flex-col rounded-lg bg-emerald-600 sm:h-[600px] sm:w-[600px]">
        <CalHeader />
        <CalBody />
        <CalFooter />
      </div>
      <MyBookingHeader />
      <MyBooking />
      <div
      className={`flex h-[485px] w-full flex-col rounded-lg border-[6px] ${
        c?.isBeingEdited ? "border-emerald-300" : "border-emerald-900"
      } bg-slate-700`}
    >
      <CalHeader />
      <CalBody />
      <CalFooter />
    </div>
    </div>
  )
};
