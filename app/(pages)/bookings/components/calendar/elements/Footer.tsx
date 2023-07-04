"use client";

import { FC, useContext, useEffect } from "react";
import useCalendar from "../../../../../../stores/SCalendar";
import SearchAndSelect from "../../../../../../components/SearchAndSelect";
import useOffice from "../../../../../../stores/SOffices";
import { CBookings } from "../../../Context";
import useTheme from "../../../../../../hooks/useTheme";
import convertFromIdToOfficeName from "../../../../../../helpers/convertFromIdToOfficeName";

const Footer: FC = () => {
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const setSelectedCalWeek = useCalendar((s) => s.setSelectedCalWeek);
  const currentMonth = useCalendar((s) => s.currentMonth);
  const currentYear = useCalendar((s) => s.currentYear);
  const currentCalWeek = useCalendar((s) => s.currentCalWeek);
  const today = useCalendar((s) => s.today);
  const allOffices = useOffice((s) => s.allOffices);
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
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
    c?.setLocallySelectedOfficeId(globallySelectedOfficeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-6 rounded-b-lg bg-emerald-800 px-4 py-6">
      <button
        className="w-min rounded-lg border-2 border-emerald-400 bg-emerald-600 px-3 py-2 uppercase tracking-widest text-emerald-200 hover:bg-emerald-400 hover:text-emerald-600"
        onClick={setAllRelevantCalendarStoreVariablesToTodaysAttributes}
      >
        heute
      </button>
      <div className="h-full">
        <SearchAndSelect
          value={c?.locallySelectedOfficeId}
          setValue={c!.setLocallySelectedOfficeId}
          listOfValues={allOffices.map((office) => office.officeId)}
          theme={theme}
          displayFilter={(officeId) =>
            convertFromIdToOfficeName(officeId) as string
          }
        />
      </div>
    </div>
  );
};

export default Footer;
