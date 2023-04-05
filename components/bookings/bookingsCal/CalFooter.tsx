import React, { useContext, useEffect } from "react";
import useCalendar from "../../../stores/SCalendar";
import SearchAndSelect from "../../SearchAndSelect";
import useOffice from "../../../stores/SOffices";
import { CBookings } from "../../contexts/CBookings";
import useTheme from "../../../hooks/useTheme";
import {
  EOfficesEnglishToGerman,
  TOfficeCityEnglish,
} from "../../../typings/types/TOfficeCity";

export default function CalFooter() {
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const setSelectedCalWeek = useCalendar((s) => s.setSelectedCalWeek);
  const currentMonth = useCalendar((s) => s.currentMonth);
  const currentYear = useCalendar((s) => s.currentYear);
  const currentCalWeek = useCalendar((s) => s.currentCalWeek);
  const today = useCalendar((s) => s.today);
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const globallySelectedOfficeName = useOffice(
    (s) => s.globallySelectedOfficeName
  );
  const setToday = useCalendar((s) => s.setToday);
  const c = useContext(CBookings);
  const theme = useTheme();

  const setAllRelevantCalendarStoreVariablesToTodaysAttributes = () => {
    setToday(today);
    setSelectedMonth(currentMonth);
    setSelectedYear(currentYear);
    setSelectedCalWeek(currentCalWeek);
  };

  useEffect(() => {
    c?.setLocallySelectedOfficeName(globallySelectedOfficeName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globallySelectedOfficeName]);

  return (
    <div className="flex w-full items-center justify-center gap-6 rounded-b-lg bg-emerald-800 py-6 px-4">
      <button
        className="w-min rounded-lg border-2 border-emerald-400 bg-emerald-600 px-3 py-2 uppercase tracking-widest text-emerald-200 hover:bg-emerald-400 hover:text-emerald-600"
        onClick={setAllRelevantCalendarStoreVariablesToTodaysAttributes}
      >
        heute
      </button>
      <div className="h-full">
        <SearchAndSelect
          value={c?.locallySelectedOfficeName}
          setValue={c!.setLocallySelectedOfficeName}
          listOfValues={allOfficeNames}
          theme={theme}
          displayFilter={(city: TOfficeCityEnglish) =>
            EOfficesEnglishToGerman[city]
          }
        />
      </div>
    </div>
  );
}
