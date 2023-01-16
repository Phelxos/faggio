import useCalendar from "../../../stores/SCalendar";
import SearchAndSelect from "../../SearchAndSelect";
import displayEquivalent from "../../../helpers/displayEquivalent";
import Icon from "../../icons/Icon";
<<<<<<< HEAD
=======
import useCurrentTheme from "../../../hooks/useCurrentTheme";
>>>>>>> bookings

export default function CalHeader() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const setSelectedMonth = useCalendar((s) => s.setSelectedMonth);
  const incrementSelectedMonth = useCalendar((s) => s.incrementSelectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const setSelectedYear = useCalendar((s) => s.setSelectedYear);
  const incrementSelectedYear = useCalendar((s) => s.incrementSelectedYear);
  const displayedMonths = useCalendar((s) => s.displayedMonths);
  const displayedYears = useCalendar((s) => s.displayedYears);
  useCurrentTheme();

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
    <section className="flex w-full items-center justify-around gap-4 rounded-t-lg bg-emerald-900 p-6">
      <div className="flex w-1/2 items-center justify-center">
        <Icon
          icon="chevronLeft"
          className="mx-1 hidden h-8 w-8 fill-emerald-700 hover:cursor-pointer hover:fill-emerald-100 sm:inline"
          onClick={handleClick.chevronLeft.month}
        />
        <SearchAndSelect
          value={displayEquivalent(selectedMonth, "month")}
          setValue={(val) => setSelectedMonth(displayEquivalent(val, "month"))}
          listOfValues={displayedMonths}
          theme="emerald"
        />
        <Icon
          icon="chevronRight"
          onClick={handleClick.chevronRight.month}
          className="mx-1 hidden h-8 w-8 fill-emerald-700 hover:cursor-pointer hover:fill-emerald-100 sm:inline"
        />
      </div>
      <div className="flex w-1/2 items-center justify-center lg:m-0">
        <Icon
          icon="chevronLeft"
          className="mx-1 hidden h-8 w-8 fill-emerald-700 hover:cursor-pointer hover:fill-emerald-100 sm:inline"
          onClick={handleClick.chevronLeft.year}
        />
        <SearchAndSelect
          value={selectedYear}
          setValue={setSelectedYear}
          listOfValues={displayedYears}
          theme="emerald"
        />
        <Icon
          icon="chevronRight"
          className="mx-1 hidden h-8 w-8 fill-emerald-700 hover:cursor-pointer hover:fill-emerald-100 sm:inline"
          onClick={handleClick.chevronRight.year}
        />
      </div>
    </section>
  );
}
