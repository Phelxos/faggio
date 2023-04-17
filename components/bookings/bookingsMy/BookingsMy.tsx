import React from "react";
import Header from "./BookingsMyHeader";
import Main from "./BookingsMyMain";

export default function BookingsMy() {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-xl border-8 border-emerald-900/50">
      <Header />
      <Main />
    </div>
  );
}
