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
    <div>
      <SearchAndSelect
        value={selectedCalWeek}
        setValue={(val) => setSelectedCalWeek(val)}
        listOfValues={displayedCalWeeksInSelectedMonth}
        theme={theme}
        areOptionsOpeningUpward={windowSize.height! < 900 ? true : false}
      />
    </div>
  );
}
