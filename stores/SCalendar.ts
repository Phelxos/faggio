import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getWeek } from "date-fns";

interface Interface {
  currentDate: number;
  currentMonth: number;
  currentWeekday: number;
  currentCalWeek: number;
  currentYear: number;
  countedWeekdays: { [index: number]: number };
  selectedDate: number;
  selectedCalWeek: number;
  selectedMonth: number;
  selectedYear: number;
  displayedWeekdays: string[];
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

const useCalendar = create<Interface>()(
  devtools(
    persist((set) => ({
      currentDate: today.getDate(),
      currentMonth: today.getMonth(),
      currentYear: today.getFullYear(),
      currentWeekday: today.getDay(),
      currentCalWeek: getWeek(today),
      countedWeekdays: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
      selectedDate: today.getDate(),
      selectedMonth: today.getMonth(),
      selectedYear: today.getFullYear(),
      selectedCalWeek: 0,
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
