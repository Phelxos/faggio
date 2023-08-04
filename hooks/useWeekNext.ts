"use client";

import {
  getDate,
  getDay,
  nextSunday,
  nextFriday,
  nextMonday,
  nextThursday,
  nextTuesday,
  nextWednesday,
} from "date-fns";
import displayEquivalent from "../helpers/displayEquivalent/displayEquivalent";
import useCalendar from "../stores/SCalendar";

const useNextWeek = (): {
  date: Date;
  dateNumber: number;
  name: any;
}[] => {
  const today = useCalendar((s) => s.today);
  const functionsForDeterminingNextWeekDays = [
    nextMonday,
    nextTuesday,
    nextWednesday,
    nextThursday,
    nextFriday,
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

export default useNextWeek;
