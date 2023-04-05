import { useRef } from "react";
import useTheme from "../../../../hooks/useTheme";
import SearchAndSelect from "../../../SearchAndSelect";
import useOffice from "../../../../stores/SOffices";
import { CBookings } from "../../../contexts/CBookings";
import useWindowSize from "../../../../hooks/useWindowSize";
import { useContext } from "react";
import useCalendar from "../../../../stores/SCalendar";
import {
  TOfficeCityEnglish,
  EOfficesEnglishToGerman,
} from "../../../../typings/types/TOfficeCity";

export default function BookingsOtherHeader() {
  const theme = useTheme();
  const c = useContext(CBookings);
  const windowSize = useWindowSize();
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  const selectedCalWeek = useCalendar((s) => s.selectedCalWeek);
  const setSelectedCalWeek = useCalendar((s) => s.setSelectedCalWeek);
  const displayedCalWeeksInSelectedMonth = useCalendar(
    (s) => s.displayedCalWeeksInSelectedMonth
  );

  return (
    <div className="flex w-full flex-col justify-around">
      <p className="bg-emerald-900/50 py-4 text-center text-lg font-thin tracking-wider text-emerald-500/75">
        Buchungen <span className="font-bold">meiner Kollegen</span>
      </p>
      <div className="flex flex-wrap items-end justify-center gap-4 bg-emerald-700/50 p-4 text-lg">
        <span className="text-emerald-200/75">in</span>
        <div className="max-w-[150px]">
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
}
