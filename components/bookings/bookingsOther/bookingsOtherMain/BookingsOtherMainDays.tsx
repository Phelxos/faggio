import React from "react";
import useCalendar from "../../../../stores/SCalendar";
import getDate from "../../../../helpers/getDate";
import displayEquivalent from "../../../../helpers/displayEquivalent";

export default function BookingsOtherMainDays() {
  const workingDaysOfSelectedCalWeek = useCalendar(
    (s) => s.workingDaysOfSelectedCalWeek
  );
  return (
    <ul className="flex flex-col items-center">
      {workingDaysOfSelectedCalWeek.map((workingDay, i) => {
        const safeDate = getDate(workingDay);
        const date = safeDate.getDate();
        const day = displayEquivalent(safeDate.getDay(), "day");
        return (
          <li key={i}>
            <div>
              <span>{day}</span>
              <span>{date}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
