"use client";

import { FC, useContext } from "react";
import { Context as BookingsContext } from "../../Context";
import Body from "./elements/Body";
import Footer from "./elements/Footer";
import Header from "./elements/Header";

const Calendar: FC = () => {
  const c = useContext(BookingsContext);
  return (
    <div
      className={`flex h-[485px] w-full flex-col rounded-lg border-[6px] ${
        c?.isBeingEdited ? "border-lime-300" : "border-emerald-900"
      } bg-slate-700`}
      ref={c?.calRef}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Calendar;
