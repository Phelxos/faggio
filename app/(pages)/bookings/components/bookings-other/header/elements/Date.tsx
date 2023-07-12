"use client";

import { FC } from "react";
import displayEquivalent from "../../../../../../../helpers/displayEquivalent/displayEquivalent";
import useCalendar from "../../../../../../../stores/SCalendar";

const Date: FC = () => {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const workingDays = useCalendar(
    (s) => s.workingDaysOfSelectedCalWeekAndTheirMonth
  );

  function positionOtherMonth() {
    let monthCounter = 0;
    for (let i = 1; i < workingDays.length; i++) {
      if (workingDays[i].month !== workingDays[i - 1].month) {
        monthCounter++;
      }
    }
    return {
      isPresent: monthCounter > 0,
      isBeforeSelectedMonth:
        workingDays[0]?.month === selectedMonth ? false : true,
    };
  }

  return (
    <div className="flex items-center justify-between gap-2 border-t-4 border-emerald-900 bg-slate-800 p-3 uppercase tracking-widest text-slate-300/50">
      <div className="text-md flex gap-2">
        {positionOtherMonth().isPresent &&
          positionOtherMonth().isBeforeSelectedMonth && (
            <span className="font-extralight">
              {displayEquivalent(selectedMonth - 1, "month")} /
            </span>
          )}
        <span className="font-semibold">
          {displayEquivalent(selectedMonth, "month")}
        </span>
        {positionOtherMonth().isPresent &&
          !positionOtherMonth().isBeforeSelectedMonth && (
            <span className="font-light">
              / {displayEquivalent(selectedMonth + 1, "month")}
            </span>
          )}
      </div>

      <span className="rounded bg-slate-600/25 p-2 text-xs font-bold">
        {selectedYear}
      </span>
    </div>
  );
};

export default Date;
