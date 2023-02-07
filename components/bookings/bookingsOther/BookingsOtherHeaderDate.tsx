import React, { useEffect, useState } from "react";
import useTheme from "../../../hooks/useTheme";
import SearchAndSelect from "../../SearchAndSelect";
import displayEquivalent from "../../../helpers/displayEquivalent";
import useCalendar from "../../../stores/SCalendar";
import useWindowSize from "../../../hooks/useWindowSize";

export default function BookingsOtherHeaderDate() {
  const theme = useTheme();
  const windowSize = useWindowSize();

  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const selectedCalWeek = useCalendar((s) => s.selectedCalWeek);
  const setSelectedCalWeek = useCalendar((s) => s.setSelectedCalWeek);
  const displayedCalWeeksInSelectedMonth = useCalendar(
    (s) => s.displayedCalWeeksInSelectedMonth
  );

  return (
    <div className="flex gap-2 rounded-lg bg-emerald-800 p-4">
      <div className="flex items-center gap-2 rounded-lg bg-emerald-700 p-2">
        <span className="text-xs font-bold text-emerald-300">KW</span>
        <SearchAndSelect
          value={selectedCalWeek}
          setValue={(val) => setSelectedCalWeek(val)}
          listOfValues={displayedCalWeeksInSelectedMonth}
          theme={theme}
          areOptionsOpeningUpward={windowSize.height! < 900 ? true : false}
        />
      </div>
      <div className="flex w-full items-center gap-2 text-xs uppercase tracking-wider text-emerald-300">
        <span className="rounded-xl bg-emerald-700 p-2">
          {displayEquivalent(selectedMonth, "month")}
        </span>
        <span className="rounded-xl bg-emerald-700 p-2">{selectedYear}</span>
      </div>
    </div>
  );
}
