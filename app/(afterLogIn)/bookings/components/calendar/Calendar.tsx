"use client";

import { FC, useContext } from "react";
import { Context as BookingsContext } from "../../Context";
import Body from "./elements/Body";
import Footer from "./elements/Footer";
import Header from "./elements/Header";

const Calendar: FC = () => {
  const context = useContext(BookingsContext);
  return (
    <div
      className={`col-span-full flex h-[485px] w-full flex-col rounded-lg border-[6px] sm:col-start-2 sm:col-end-12 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-2 xl:col-start-2 2xl:col-start-1 2xl:col-end-5 ${
        context?.isBeingEdited ? "border-lime-300" : "border-emerald-900"
      } bg-slate-700`}
      ref={context?.calRef}
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Calendar;
