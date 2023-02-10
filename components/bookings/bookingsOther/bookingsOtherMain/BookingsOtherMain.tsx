import React, { useEffect } from "react";
import useCalendar from "../../../../stores/SCalendar";
import getDate from "../../../../helpers/getDate";
import displayEquivalent from "../../../../helpers/displayEquivalent";
import Row from "./BookingsOtherMainRow";

export default function BookingsOtherMainDays() {
  const workingDaysOfSelectedCalWeek = useCalendar(
    (s) => s.workingDaysOfSelectedCalWeek
  );

  useEffect(() => {
    console.log(
      "🚀 ~ file: BookingsOtherMain.tsx:10 ~ workingDaysOfSelectedCalWeek",
      workingDaysOfSelectedCalWeek
    );
  });
  return (
    <ul className="flex flex-col items-center">
      {workingDaysOfSelectedCalWeek.map((workingDay, i) => {
        const safeDate = getDate(workingDay);
        const date = safeDate.getDate();
        const day = displayEquivalent(safeDate.getDay(), "day");
        return (
          <li
            key={i}
            className="w-full border-b-4 border-b-emerald-900/50 first:border-t-4 first:border-t-emerald-900/50 last:border-b-0"
          >
            <div className="grid grid-cols-8">
              <div
                className={`col-span-2 flex flex-col items-center justify-center border-r-2 p-3 ${
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
              <Row i={i} />{" "}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
