import React from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";
import MyBookingHeader from "../bookingsMy/MyBookingHeader";
import MyBooking from "../bookingsMy/myBooking";

export default function Calendar() {
  return (
    <div>
      <div className="flex h-[475px] w-full flex-col rounded-lg bg-emerald-600 sm:h-[600px] sm:w-[600px]">
        <CalHeader />
        <CalBody />
        <CalFooter />
      </div>
      <MyBookingHeader />
      <MyBooking />
    </div>
    
    
  );
}
