import React from "react";
import BookingsOtherHeaderOffice from "./BookingsOtherHeaderOffice";
import BookingsOtherHeaderDate from "./BookingsOtherHeaderDate";

export default function BookingsOtherHeader() {
  return (
    <div className="flex flex-col gap-4 rounded-t-lg bg-emerald-900 p-6">
      <BookingsOtherHeaderOffice />
      <BookingsOtherHeaderDate />
    </div>
  );
}
