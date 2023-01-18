import React, { useContext, useEffect } from "react";
import useCalendar from "../../../stores/SCalendar";
import SearchAndSelect from "../../SearchAndSelect";
import useOffice from "../../../stores/SOffices";
import { CBookings } from "../../contexts/CBookings";
import useCurrentTheme from "../../../hooks/useCurrentTheme";

export default function CalFooter() {
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const currentMonth = useCalendar((s) => s.currentMonth);
  const currentYear = useCalendar((s) => s.currentYear);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const context = useContext(CBookings);
  const theme = useCurrentTheme();

  useEffect(() => {
    context?.setLocallySelectedOfficeName(globallySelectedOfficeName);
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-6 rounded-b-lg bg-emerald-800 py-6 px-4">
      <button
        className="w-min rounded-lg border-2 border-emerald-400 bg-emerald-600 px-3 py-2 uppercase tracking-widest text-emerald-200 hover:bg-emerald-400 hover:text-emerald-600"
        onClick={() => {
          setSelectedMonth(currentMonth);
          setSelectedYear(currentYear);
        }}
      >
        heute
      </button>
      <div className="h-full">
        <SearchAndSelect
          value={context?.locallySelectedOfficeName}
          setValue={context!.setLocallySelectedOfficeName}
          listOfValues={allOfficeNames}
          theme={theme}
        />
      </div>
    </div>
  );
}
