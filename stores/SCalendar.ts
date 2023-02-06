import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getWeek, startOfMonth, endOfMonth } from "date-fns";

interface Interface {
  currentDate: number;
  currentWeekday: number;
  currentCalWeek: number;
  currentMonth: number;
  currentYear: number;
  countedWeekdays: { [index: number]: number };
  selectedDate: number;
  selectedCalWeek: number;
  selectedMonth: number;
  selectedYear: number;
  displayedWeekdays: string[];
  displayedNumberOfCalWeeksInSelectedYear: number;
  displayedCalWeeksInSelectedMonth: number[];
  displayedWeekOverview: boolean;
  displayedMonths: string[];
  displayedYears: number[];
  setDisplayedWeekOverview: () => void;
  setSelectedCalWeek: (calWeek: number) => void;
  setSelectedMonth: (month: number) => void;
  setSelectedYear: (year: number) => void;
  incrementCountedWeekdays: (weekday: number, by: number) => void;
  incrementSelectedMonth: (by: number) => void;
  incrementSelectedYear: (by: number) => void;
  [prop: string]: any;
}

const today = new Date();

function getDisplayedCalWeeksInSelectedYear(): number[] {
  const firstDay = startOfMonth(today);
  const lastDay = endOfMonth(today);
  const firstWeek = getWeek(firstDay, {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
  });
  const lastWeek = getWeek(lastDay, {
    weekStartsOn: 1,
    firstWeekContainsDate: 4,
  });
  return Array.from(
    { length: lastWeek - firstWeek + 1 },
    (_, i) => firstWeek + i
  );
}

// to receive the number of weeks in the current year at "numberOfWeeksInYear"
const currentYear = new Date().getFullYear();
const lastDayOfCurrentYear = new Date(currentYear, 11, 31);

const useCalendar = create<Interface>()(
  devtools(
    persist((set) => ({
      currentDate: today.getDate(),
      currentMonth: today.getMonth(),
      currentYear: today.getFullYear(),
      currentWeekday: today.getDay(),
      currentCalWeek: getWeek(today, {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
      }),
      countedWeekdays: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      displayedNumberOfCalWeeksInSelectedYear: getWeek(lastDayOfCurrentYear, {
        weekStartsOn: 1,
        firstWeekContainsDate: 4,
      }),
      displayedCalWeeksInSelectedMonth: getDisplayedCalWeeksInSelectedYear(),
      selectedDate: today.getDate(),
      selectedMonth: today.getMonth(),
      selectedYear: today.getFullYear(),
      selectedCalWeek: getWeek(today),
      displayedMonths: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      displayedYears: [
        ...Array.from(Array(today.getFullYear() + 11 - 2022).keys()),
      ].map((year) => year + 2022),
      setDisplayedWeekOverview: () =>
        set((state) => ({
          displayedWeekOverview: !state.displayedWeekOverview,
        })),
      displayedWeekdays: ["KW", "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      setSelectedCalWeek: (calWeek: number) =>
        set((s) => ({
          selectedCalWeek: calWeek,
        })),
      displayedWeekOverview: false,
      setSelectedYear: (year: number) =>
        set(() => ({
          selectedYear: year,
        })),
      setSelectedMonth: (month: number) =>
        set(() => ({
          selectedMonth: month,
        })),
      incrementCountedWeekdays: (weekday: number, by: number) =>
        set((state) => ({
          countedWeekdays: {
            ...state.countedWeekdays,
            [weekday]: state.countedWeekdays[weekday] + by,
          },
        })),
      incrementSelectedMonth: (by: number) =>
        set((state) => ({
          selectedMonth: state.selectedMonth + by,
        })),
      incrementSelectedYear: (by: number) =>
        set((state) => ({
          selectedYear: state.selectedYear + by,
        })),
    }))
  )
);

export default useCalendar;
