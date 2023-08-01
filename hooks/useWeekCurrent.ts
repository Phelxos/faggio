"use client";

import {
  getDate,
  getDay,
  nextSunday,
  previousFriday,
  previousMonday,
  previousThursday,
  previousTuesday,
  previousWednesday,
} from "date-fns";
import displayEquivalent from "../helpers/displayEquivalent/displayEquivalent";
import useCalendar from "../stores/SCalendar";

const useWeekCurrent = (): {
  date: Date;
  dateNumber: number;
  name: any;
}[] => {
  const today = useCalendar((s) => s.today);
  const functionsForDeterminingNextWeekDays = [
    previousMonday,
    previousTuesday,
    previousWednesday,
    previousThursday,
    previousFriday,
  ];
  const nextWeek = functionsForDeterminingNextWeekDays.map((func) => {
    const nextWeekday = func(nextSunday(new Date(today)));
    const dateNumber = getDate(nextWeekday);
    const name = displayEquivalent(getDay(nextWeekday) - 1, "day"); // date-fns' getDay() returns 0 for Sunday, but displayEquivalent() expects 0 to be Monday
    return {
      date: nextWeekday,
      dateNumber,
      name,
    };
  });

  return nextWeek;
};

export default useWeekCurrent;
