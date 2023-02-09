import React, { useEffect, useState } from "react";
import useTheme from "../../../../hooks/useTheme";
import SearchAndSelect from "../../../SearchAndSelect";
import displayEquivalent from "../../../../helpers/displayEquivalent";
import useCalendar from "../../../../stores/SCalendar";
import useWindowSize from "../../../../hooks/useWindowSize";

export default function BookingsOtherHeaderDate() {
  const theme = useTheme();
  const windowSize = useWindowSize();

  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);

  return (
    <div className="flex items-center justify-end gap-2 bg-slate-700/50 p-3 text-xl uppercase tracking-widest text-slate-300/50">
      <span className="font-semibold">
        {displayEquivalent(selectedMonth, "month")}
      </span>
      <span className="font-thin">{selectedYear}</span>
    </div>
  );
}
