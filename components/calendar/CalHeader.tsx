import useCalendar from "../../stores/SCalendar";
import SearchAndSelect from "../SearchAndSelect";
import displayEquivalent from "../../helpers/displayEquivalent";
import Icon from "../icons/Icon";

export default function CalHeader() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const incrementSelectedMonth = useCalendar((s) => s.incrementSelectedMonth);
  const displayedMonths = useCalendar((s) => s.displayedMonths);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const currentYear = useCalendar((s) => s.currentYear);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const incrementSelectedYear = useCalendar((s) => s.incrementSelectedYear);
  const displayedYears = useCalendar((s) => s.displayedYears);

  return (
    <section className="flex flex-wrap items-center justify-between rounded-t bg-slate-800 p-4">
      <div className="mx-auto flex items-center justify-center lg:m-0">
        <svg
          onClick={() => {
            if (selectedMonth === 0) {
              incrementSelectedYear(-1);
              setSelectedMonth(11);
              return;
            } else {
              incrementSelectedMonth(-1);
            }
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="mx-1 hidden h-6 w-6 opacity-50 hover:cursor-pointer hover:stroke-slate-100 sm:inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <Icon icon="chevronLeft" />
        </svg>
        <SearchAndSelect
          value={displayEquivalent(selectedMonth, "month")}
          setValue={(val) => setSelectedMonth(displayEquivalent(val, "month"))}
          listOfValues={displayedMonths}
        />
        <svg
          onClick={() => {
            if (selectedMonth === 11) {
              incrementSelectedYear(1);
              setSelectedMonth(0);
              return;
            } else {
              incrementSelectedMonth(1);
            }
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="mx-1 hidden h-6 w-6 opacity-50 hover:cursor-pointer hover:stroke-slate-100 sm:inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <Icon icon="chevronRight" />
        </svg>
      </div>
      <div className="mx-auto flex items-center justify-center lg:m-0">
        <svg
          onClick={() => {
            incrementSelectedYear(-1);
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="mx-1 hidden h-6 w-6 opacity-25 hover:cursor-pointer hover:stroke-slate-100 sm:inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <Icon icon="chevronLeft" />
        </svg>
        <SearchAndSelect
          value={selectedYear}
          setValue={setSelectedYear}
          listOfValues={displayedYears}
        />

        <svg
          onClick={() => {
            incrementSelectedYear(1);
          }}
          xmlns="http://www.w3.org/2000/svg"
          className="mx-1 hidden h-6 w-6 opacity-25 hover:cursor-pointer hover:stroke-slate-100 sm:inline"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <Icon icon="chevronRight" />
        </svg>
      </div>
    </section>
  );
}
