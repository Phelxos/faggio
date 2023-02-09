import React from "react";
import BookingsOtherHeaderInput from "./BookingsOtherHeaderInput";
import BookingsOtherHeaderDate from "./BookingsOtherHeaderDate";

export default function BookingsOtherHeader() {
  return (
    <div className="flex flex-col rounded-t-lg">
      <BookingsOtherHeaderInput />
      <BookingsOtherHeaderDate />
    </div>
  );
}
