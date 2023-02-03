import useTheme from "../../../hooks/useTheme";
import SearchAndSelect from "../../SearchAndSelect";
import useCalendar from "../../../stores/SCalendar";
import displayEquivalent from "../../../helpers/displayEquivalent";
import useOffice from "../../../stores/SOffices";
import { CBookings } from "../../contexts/CBookings";
import useWindowSize from "../../../hooks/useWindowSize";
import { useContext } from "react";

export default function BookingsOtherHeader() {
  const theme = useTheme();
  const c = useContext(CBookings);
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const incrementSelectedMonth = useCalendar((s) => s.incrementSelectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const incrementSelectedYear = useCalendar((s) => s.incrementSelectedYear);
  const displayedMonths = useCalendar((s) => s.displayedMonths);
  const displayedYears = useCalendar((s) => s.displayedYears);
  const windowSize = useWindowSize();
  const allOfficeNames = useOffice((s) => s.allOfficeNames);
  return (
    <div className="flex w-full flex-col items-center justify-around gap-4 rounded-t-lg bg-emerald-900 p-6">
      <div className="flex items-end gap-2">
        <p className="font-light">
          Buchungen <span className="font-semibold">meiner Kollegen</span> in
        </p>
        <div>
          <SearchAndSelect
            value={c?.locallySelectedOfficeName}
            setValue={c!.setLocallySelectedOfficeName}
            listOfValues={allOfficeNames}
            theme={theme}
            areOptionsOpeningUpward={windowSize.height! < 900 ? true : false}
          />
        </div>
      </div>
      <div>
        <SearchAndSelect
          value={displayEquivalent(selectedMonth, "month")}
          setValue={(val) => setSelectedMonth(displayEquivalent(val, "month"))}
          listOfValues={displayedMonths}
          theme={theme}
        />
      </div>
    </div>
  );
}
