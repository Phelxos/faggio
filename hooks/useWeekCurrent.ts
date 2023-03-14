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
import displayEquivalent from "../helpers/displayEquivalent";
import useCalendar from "../stores/SCalendar";

export default function useWeekCurrent() {
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
    const name = displayEquivalent(getDay(nextWeekday), "day");
    return {
      date: nextWeekday,
      dateNumber,
      name,
    };
  });

  return nextWeek;
}
