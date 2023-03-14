import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getWeek } from "date-fns";
import {
  getDisplayedCalWeeksInSelectedMonth,
  getLastDayOfCurrentYear,
  getFirstCalWeekOfSelectedMonth,
  getAllWorkingDaysOfYearWithTheirCorrespondingCalWeekAndMonth,
  getWorkingDaysOfSelectedCalWeek,
  getWorkingDaysOfSelectedCalWeekAndTheirMonth,
} from "../helpers/helpersForStoreCalendar";

interface Interface {
  today: Date;
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
  displayedMonths: string[];
  displayedYears: number[];
  workingDaysOfSelectedYearAndTheirCalWeekAndMonth: (
    | { date: Date; calWeek: number; month: number }
    | undefined
  )[];
  workingDaysOfSelectedCalWeek: Date[];
  workingDaysOfSelectedCalWeekAndTheirMonth: { date: Date; month: number }[];
  setToday: (date: Date) => void;
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
    persist(
      (set) => ({
        today: today,
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
        setToday: (date) => {
          set({ today: date });
        },
        setDisplayedWeekOverview: () =>
          set((state) => ({
            displayedWeekOverview: !state.displayedWeekOverview,
          })),
        displayedWeekdays: ["KW", "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
        setSelectedCalWeek: (calWeek: number) =>
          set((s) => ({
            selectedCalWeek: calWeek,
            workingDaysOfSelectedCalWeek: getWorkingDaysOfSelectedCalWeek(
              s.workingDaysOfSelectedYearAndTheirCalWeekAndMonth,
              calWeek
            ),
            workingDaysOfSelectedCalWeekAndTheirMonth:
              getWorkingDaysOfSelectedCalWeekAndTheirMonth(
                s.workingDaysOfSelectedYearAndTheirCalWeekAndMonth,
                calWeek
              ),
          })),
        setSelectedYear: (year: number) =>
          set((s) => ({
            selectedYear: year,
            displayedCalWeeksInSelectedMonth:
              getDisplayedCalWeeksInSelectedMonth(s.selectedMonth, year),
            selectedCalWeek: getFirstCalWeekOfSelectedMonth(
              s.selectedMonth,
              year
            ),
            workingDaysOfSelectedYearAndTheirCalWeekAndMonth:
              getAllWorkingDaysOfYearWithTheirCorrespondingCalWeekAndMonth(
                year
              ),
            workingDaysOfSelectedCalWeek: getWorkingDaysOfSelectedCalWeek(
              getAllWorkingDaysOfYearWithTheirCorrespondingCalWeekAndMonth(
                year
              ),
              getFirstCalWeekOfSelectedMonth(s.selectedMonth, year)
            ),
            workingDaysOfSelectedCalWeekAndTheirMonth:
              getWorkingDaysOfSelectedCalWeekAndTheirMonth(
                getAllWorkingDaysOfYearWithTheirCorrespondingCalWeekAndMonth(
                  year
                ),
                getFirstCalWeekOfSelectedMonth(s.selectedMonth, year)
              ),
          })),
        workingDaysOfSelectedYearAndTheirCalWeekAndMonth:
          getAllWorkingDaysOfYearWithTheirCorrespondingCalWeekAndMonth(
            today.getFullYear()
          ),
        workingDaysOfSelectedCalWeek: getWorkingDaysOfSelectedCalWeek(
          getAllWorkingDaysOfYearWithTheirCorrespondingCalWeekAndMonth(
            today.getFullYear()
          ),
          getWeek(today, {
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
          })
        ),
        workingDaysOfSelectedCalWeekAndTheirMonth:
          getWorkingDaysOfSelectedCalWeekAndTheirMonth(
            getAllWorkingDaysOfYearWithTheirCorrespondingCalWeekAndMonth(
              today.getFullYear()
            ),
            getWeek(today, {
              weekStartsOn: 1,
              firstWeekContainsDate: 4,
            })
          ),
        setSelectedMonth: (month: number) =>
          set((s) => ({
            selectedMonth: month,
            displayedCalWeeksInSelectedMonth:
              getDisplayedCalWeeksInSelectedMonth(month, s.selectedYear),
            selectedCalWeek: getFirstCalWeekOfSelectedMonth(
              month,
              s.selectedYear
            ),
            workingDaysOfSelectedCalWeek: getWorkingDaysOfSelectedCalWeek(
              s.workingDaysOfSelectedYearAndTheirCalWeekAndMonth,
              getFirstCalWeekOfSelectedMonth(month, s.selectedYear)
            ),
            workingDaysOfSelectedCalWeekAndTheirMonth:
              getWorkingDaysOfSelectedCalWeekAndTheirMonth(
                s.workingDaysOfSelectedYearAndTheirCalWeekAndMonth,
                getFirstCalWeekOfSelectedMonth(month, s.selectedYear)
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
      }),
      {
        name: "calendar",
      }
    )
  )
);

export default useCalendar;
