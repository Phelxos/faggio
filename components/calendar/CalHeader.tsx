import useCalendar from "../../stores/SCalendar";
import SearchAndSelect from "../SearchAndSelect";
import displayEquivalent from "../../helpers/displayEquivalent";
import Icon from "../icons/Icon";

export default function CalHeader() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const incrementSelectedMonth = useCalendar((s) => s.incrementSelectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const incrementSelectedYear = useCalendar((s) => s.incrementSelectedYear);
  const displayedMonths = useCalendar((s) => s.displayedMonths);
  const displayedYears = useCalendar((s) => s.displayedYears);

  const handleClick = {
    chevronLeft: {
      month: () => {
        if (selectedMonth === 0) {
          incrementSelectedYear(-1);
          setSelectedMonth(11);
          return;
        } else {
          incrementSelectedMonth(-1);
        }
      },
      year: () => {
        incrementSelectedYear(-1);
      },
    },
    chevronRight: {
      month: () => {
        if (selectedMonth === 11) {
          incrementSelectedYear(1);
          setSelectedMonth(0);
          return;
        } else {
          incrementSelectedMonth(1);
        }
      },
      year: () => {
        incrementSelectedYear(1);
      },
    },
  };

  return (
    <section className="flex h-full w-full grow items-center justify-between rounded-t-lg bg-emerald-800 p-4">
      <div className="mx-auto flex items-center justify-center lg:m-0">
        <Icon
          icon="chevronLeft"
          className="mx-1 hidden h-6 w-6 opacity-50 hover:cursor-pointer hover:stroke-emerald-100 sm:inline"
          onClick={handleClick.chevronLeft.month}
        />
        <SearchAndSelect
          value={displayEquivalent(selectedMonth, "month")}
          setValue={(val) => setSelectedMonth(displayEquivalent(val, "month"))}
          listOfValues={displayedMonths}
        />
        <Icon
          icon="chevronRight"
          onClick={handleClick.chevronRight.month}
          className="mx-1 hidden h-6 w-6 opacity-50 hover:cursor-pointer hover:stroke-emerald-100 sm:inline"
        />
      </div>
      <div className="mx-auto flex items-center justify-center lg:m-0">
        <Icon
          icon="chevronLeft"
          className="mx-1 hidden h-6 w-6 opacity-25 hover:cursor-pointer hover:stroke-emerald-100 sm:inline"
          onClick={handleClick.chevronLeft.year}
        />
        <SearchAndSelect
          value={selectedYear}
          setValue={setSelectedYear}
          listOfValues={displayedYears}
        />
        <Icon
          icon="chevronRight"
          className="mx-1 hidden h-6 w-6 opacity-25 hover:cursor-pointer hover:stroke-emerald-100 sm:inline"
          onClick={handleClick.chevronRight.year}
        />
      </div>
    </section>
  );
}
