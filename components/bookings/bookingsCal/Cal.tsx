import React, { useContext } from "react";
import CalHeader from "./CalHeader";
import CalBody from "./CalBody";
import CalFooter from "./CalFooter";
import MyBookingHeader from "../bookingsMy/BookingsMyHeader";
import MyBooking from "../bookingsMy/BookingsMy";
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
      <MyBooking />
    </div>
  );
}
