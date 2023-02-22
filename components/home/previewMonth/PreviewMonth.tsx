import React, { useState } from "react";
import mapCalendar from "../../../helpers/mapCalendar";
import useCalendar from "../../../stores/SCalendar";
import displayEquivalent from "../../../helpers/displayEquivalent";

export default function PreviewMonth() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const [displayedMonth, setDisplayedMonth]: any[] = useState(() => {
    return mapCalendar(selectedMonth, selectedYear);
  });
  console.log(displayedMonth);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between rounded-t-lg bg-emerald-900 py-4 px-6">
        <span className="text-xl font-extralight uppercase tracking-widest text-emerald-100">
          {displayEquivalent(selectedMonth, "month")}
        </span>
        <span className="rounded bg-emerald-700/50 py-2 px-4 text-emerald-500/75">
          {selectedYear}
        </span>
      </div>
      <div>
        {displayedMonth.map((week: any[], i: number) => {
          return (
            <div
              key={i}
              className={`${
                i % 2 === 0
                  ? "bg-emerald-600 text-emerald-300"
                  : "bg-emerald-700 text-emerald-400"
              } flex w-full justify-around gap-8
                 p-2`}
            >
              {week.map((weekday: any, i: number) => {
                if (weekday.isNoDayOfMonth) {
                  return <div key={i} className="h-[30px] w-[30px]" />;
                }
                if (!weekday.calWeek) {
                  return (
                    <div
                      key={i}
                      className="h-[30px] w-[30px] rounded-full bg-slate-100"
                    />
                  );
                }
              })}
            </div>
          );
        })}
      </div>
      <div className="h-[20px] w-full rounded-b-lg bg-emerald-900" />
    </div>
  );
}
