import React, { useEffect } from "react";
import useCalendar from "../../../../stores/SCalendar";
import getDate from "../../../../helpers/getDate";
import displayEquivalent from "../../../../helpers/displayEquivalent";

export default function BookingsOtherMainDays() {
  const workingDaysOfSelectedCalWeek = useCalendar(
    (s) => s.workingDaysOfSelectedCalWeek
  );
  return (
    <ul className="flex flex-col items-center border-2">
      {workingDaysOfSelectedCalWeek.map((workingDay, i) => {
        const safeDate = getDate(workingDay);
        const date = safeDate.getDate();
        const day = displayEquivalent(safeDate.getDay(), "day");
        return (
          <li key={i} className="w-full">
            <div className="grid grid-cols-8 gap-2 border">
              <span className="place-self-start p-2 text-xl font-light">
                {day}
              </span>
              <span className="place-self-center p-2 text-sm font-bold">
                {date}
              </span>
              <div className="p-2s col-span-6 flex h-full items-center border-2">
                sd
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
