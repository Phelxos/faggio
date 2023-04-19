import React, { useEffect } from "react";
import useCalendar from "../../../../stores/SCalendar";
import getSafeDate from "../../../../helpers/getSafeDate";
import displayEquivalent from "../../../../helpers/displayEquivalent";
import Coworkers from "./BookingsOtherMainCoworkers";
import Date from "./BookingsOtherMainDate";

export default function BookingsOtherMainDays() {
  const workingDaysOfSelectedCalWeek = useCalendar(
    (s) => s.workingDaysOfSelectedCalWeek
  );

  return (
    <ul className="flex flex-col items-center">
      {workingDaysOfSelectedCalWeek.map((workingDay, i) => {
        const safeDate = getSafeDate(workingDay);
        const date = safeDate.getDate();
        const day = displayEquivalent(safeDate.getDay(), "day");
        return (
          <li
            key={i}
            className="w-full border-b-4 border-b-emerald-900/50 first:border-t-4 first:border-t-emerald-900/50 last:border-b-0"
          >
            <div className="grid grid-cols-8">
              <Date i={i} date={date} day={day} />
              <Coworkers i={i} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
