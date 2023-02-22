import React, { useState } from "react";
import mapCalendar from "../../../helpers/mapCalendar";
import useCalendar from "../../../stores/SCalendar";
import displayEquivalent from "../../../helpers/displayEquivalent";

export default function PreviewMonth() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const selectedCalWeek = useCalendar((s) => s.selectedCalWeek);
  const [displayedMonth, setDisplayedMonth]: any[] = useState(() => {
    return mapCalendar(selectedMonth, selectedYear);
  });

  function getOccupancyLevel(bookings: number, workstationCapacity: number) {
    const occupancyRate = Math.round((bookings / workstationCapacity) * 100);
    if (occupancyRate < 10) return 10;
    if (occupancyRate < 20) return 40;
    if (occupancyRate < 30) return 75;
    else return 90;
  }
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between rounded-t-lg bg-emerald-900 py-4 pl-6 pr-4">
        <span className="text-2xl font-extralight uppercase tracking-widest text-emerald-200">
          {displayEquivalent(selectedMonth, "month")}
        </span>
        <span className="rounded bg-emerald-700/50 py-2 px-4 tracking-widest text-emerald-400/75">
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
                  ? "bg-emerald-600 text-emerald-900"
                  : "bg-emerald-700 text-emerald-500"
              } flex w-full justify-around gap-6
                 p-3 ${
                   week[0].calWeek === selectedCalWeek &&
                   "border-y-2 border-emerald-200"
                 }`}
            >
              {week.map((weekday: any, i: number) => {
                if (weekday.isNoDayOfMonth) {
                  return <div key={i} className="h-[30px] w-[30px]" />;
                }
                if (weekday.calWeek) {
                  return (
                    <div
                      key={i}
                      className={`flex h-[30px] w-[30px] flex-col items-center justify-center ${
                        weekday.calWeek === selectedCalWeek &&
                        "rounded-lg bg-emerald-300 text-emerald-800"
                      }`}
                    >
                      {weekday.calWeek}
                    </div>
                  );
                }
                if (!weekday.calWeek) {
                  return (
                    <div
                      key={i}
                      className="h-[30px] w-[30px] rounded-full bg-emerald-200/90"
                    />
                  );
                }
              })}
            </div>
          );
        })}
      </div>
      <div className="h-[15px] w-full rounded-b-lg bg-emerald-900" />
    </div>
  );
}
