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
import displayEquivalent from "../helpers/displayEquivalent";
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
    const name = displayEquivalent(getDay(nextWeekday), "day");
    return {
      date: nextWeekday,
      dateNumber,
      name,
    };
  });

  return nextWeek;
};

export default useNextWeek;
