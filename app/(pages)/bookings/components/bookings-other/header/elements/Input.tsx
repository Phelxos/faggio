"use client";

import { FC, useContext, useEffect } from "react";
import SearchAndSelect from "../../../../../../../components/SearchAndSelect";
import { CBookings } from "../../../../Context";
import convertFromIdToOfficeName from "../../../../../../../helpers/convertFromIdToOfficeName";
import useTheme from "../../../../../../../hooks/useTheme";
import useCalendar from "../../../../../../../stores/SCalendar";
import useOffice from "../../../../../../../stores/SOffices";

const Input: FC = () => {
  const c = useContext(CBookings);
  const selectedCalWeek = useCalendar((s) => s.selectedCalWeek);
  const setSelectedCalWeek = useCalendar((s) => s.setSelectedCalWeek);
  const displayedCalWeeksInSelectedMonth = useCalendar(
    (s) => s.displayedCalWeeksInSelectedMonth
  );
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const allOffices = useOffice((s) => s.allOffices);

  const theme = useTheme();

  useEffect(() => {
    c?.setLocallySelectedOfficeId(globallySelectedOfficeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full flex-col justify-around">
      <p className="bg-emerald-900/50 py-4 text-center text-lg font-thin tracking-wider text-emerald-500/75">
        Buchungen <span className="font-bold">meiner Kollegen</span>
      </p>
      <div className="flex flex-wrap items-end justify-center gap-4 bg-emerald-700/50 p-4 text-lg">
        <span className="text-emerald-200/75">in</span>
        <div className="max-w-[150px]">
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
        <span className="text-emerald-200/75">für die </span>
        <span className="text-emerald-200/75">Kalenderwoche</span>
        <div className="max-w-[100px]">
          <SearchAndSelect
            value={selectedCalWeek}
            setValue={(val) => setSelectedCalWeek(val)}
            listOfValues={displayedCalWeeksInSelectedMonth}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
