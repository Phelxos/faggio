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
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const incrementSelectedMonth = useCalendar((s) => s.incrementSelectedMonth);
  const displayedMonths = useCalendar((s) => s.displayedMonths);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const incrementSelectedYear = useCalendar((s) => s.incrementSelectedYear);
  const displayedYears = useCalendar((s) => s.displayedYears);
  const globallySelectedCalWeek = useCalendar((s) => s.selectedCalWeek);
  const displayedNumberOfCalWeeks = useCalendar(
    (s) => s.displayedNumberOfCalWeeks
  );

  const [locallySelectedCalWeek, setLocallySelectedCalWeek] = useState<number>(
    globallySelectedCalWeek
  );
  const [locallyDisplayedCalWeeks, setLocallyDisplayedCalWeeks] = useState<
    number[]
  >(Array.from(Array(displayedNumberOfCalWeeks + 1).keys()).slice(1));

  useEffect(() => {
    setLocallyDisplayedCalWeeks(
      Array.from(Array(displayedNumberOfCalWeeks + 1).keys()).slice(1)
    );
  }, [displayedNumberOfCalWeeks]);

  return (
    <div>
      <SearchAndSelect
        value={locallySelectedCalWeek}
        setValue={(val) => setSelectedMonth(val)}
        listOfValues={locallyDisplayedCalWeeks}
        theme={theme}
        areOptionsOpeningUpward={windowSize.height! < 900 ? true : false}
      />
      <SearchAndSelect
        value={displayEquivalent(selectedMonth, "month")}
        setValue={(val) => setSelectedMonth(displayEquivalent(val, "month"))}
        listOfValues={displayedMonths}
        theme={theme}
        areOptionsOpeningUpward={windowSize.height! < 900 ? true : false}
      />
    </div>
  );
}
