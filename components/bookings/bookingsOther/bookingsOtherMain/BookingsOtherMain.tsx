import React from "react";
import useCalendar from "../../../../stores/SCalendar";

export default function BookingsOtherMain() {
  const workingDaysOfSelectedCalWeek = useCalendar(
    (s) => s.workingDaysOfSelectedCalWeek
  );
  return (
    <div className="mb-16 flex flex-col items-center">
      <ul>
        {workingDaysOfSelectedCalWeek.map((date, i) => (
          <li key={i}>{date}</li>
        ))}
      </ul>
    </div>
  );
}
