import React from "react";

interface Interface {
  day: number;
  date: number;
  i: number;
}

export default function BookingsOtherMainDate({ day, date, i }: Interface) {
  return (
    <div
      className={`col-span-2 flex flex-col items-center justify-between border-r-2 p-3 ${
        i % 2 === 0
          ? "border-r-slate-400/50 bg-slate-600/50"
          : "border-r-slate-300/50 bg-slate-500/50"
      }`}
    >
      <span className="place-self-start text-xl font-thin tracking-widest text-slate-300/75">
        {day}
      </span>
      <span className="place-self-end text-sm font-bold text-slate-400/75">
        {date}
      </span>
    </div>
  );
}
