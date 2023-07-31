"use client";

import { FC } from "react";
import displayEquivalent from "../../../../../../helpers/displayEquivalent/displayEquivalent";
import safeguardDate from "../../../../../../helpers/safeguardDateAgainstTimezoneOffset";
import useCalendar from "../../../../../../stores/SCalendar";
import Date from "./elements/Date";
import Coworkers from "./elements/Row";

const Main: FC = () => {
  const workingDaysOfSelectedCalWeek = useCalendar(
    (s) => s.workingDaysOfSelectedCalWeek
  );

  return (
    <ul className="flex flex-col items-center divide-y-8 divide-emerald-900/50">
      {workingDaysOfSelectedCalWeek.map((workingDay, i) => {
        const safeDate = safeguardDate(workingDay);
        const date = safeDate.getDate();
        const day = displayEquivalent(safeDate.getDay(), "day");
        return (
          <li
            key={i}
            className="w-full first:border-t-4 first:border-t-emerald-900/50 last:border-b-0"
          >
            <div className="grid h-[90px] grid-cols-8">
              <Date i={i} date={date} day={day as number} />
              <Coworkers i={i} date={safeDate} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Main;
