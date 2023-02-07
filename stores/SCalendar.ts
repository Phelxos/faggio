import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import {
  getWeek,
  startOfMonth,
  endOfMonth,
  isWeekend,
  nextMonday,
} from "date-fns";

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

let today = new Date();
function getDisplayedCalWeeksInSelectedMonth(
  month?: number,
  year?: number
): number[] {
  if (arguments.length) {
    today = new Date(year!, month!);
  }
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
  console.log(firstDay);
  return Array.from(
    { length: lastWeek - firstWeek + 1 },
    (_, i) => firstWeek + i
  );
}

function getLastDayOfCurrentYear(): Date {
  const currentYear = new Date().getFullYear();
  return new Date(currentYear, 11, 31);
}

function getFirstCalWeekOfSelectedMonth(month: number, year: number): number {
  const firstDayOfMonth = startOfMonth(new Date(year, month));
  if (isWeekend(firstDayOfMonth)) {
    return getWeek(nextMonday(firstDayOfMonth));
  } else {
    return getWeek(firstDayOfMonth);
  }
}

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
      displayedNumberOfCalWeeksInSelectedYear: getWeek(
        getLastDayOfCurrentYear(),
        {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
        }
      ),
      displayedCalWeeksInSelectedMonth: getDisplayedCalWeeksInSelectedMonth(),
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
        set(() => ({
          selectedCalWeek: calWeek,
        })),
      displayedWeekOverview: false,
      setSelectedYear: (year: number) =>
        set(() => ({
          selectedYear: year,
        })),
      setSelectedMonth: (month: number) =>
        set((s) => ({
          selectedMonth: month,
          displayedCalWeeksInSelectedMonth: getDisplayedCalWeeksInSelectedMonth(
            month,
            s.selectedYear
          ),
          selectedCalWeek: getFirstCalWeekOfSelectedMonth(
            month,
            s.selectedYear
          ),
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
