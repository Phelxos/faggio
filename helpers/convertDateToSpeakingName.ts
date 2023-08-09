import safeguardDate from "./safeguardDateAgainstTimezoneOffset";
import { isToday, isTomorrow, isYesterday, addDays, isSameDay } from "date-fns";

/**
 * @description Converts a date to a speaking name, e.g. "today" or "tomorrow". If the date is not convertable to a speaking name, it returns false.
 * */

const convertDateToSpeakingName = (date: Date | string): string | boolean => {
  date = safeguardDate(date);
  // const today = new Date();

  // NOTE The badge on the favorite card displaying the speaking name has to be made suitable for long words.

  // const dayAfterTomorrow = addDays(today, 2);
  // const dayBeforeYesterday = addDays(today, -2);

  if (isToday(date)) return "heute";
  if (isTomorrow(date)) return "morgen";
  if (isYesterday(date)) return "gestern";
  // if (isSameDay(dayAfterTomorrow, date)) return "übermorgen";
  // if (isSameDay(dayBeforeYesterday, date)) return "vorgestern";
  else return false;
};

export default convertDateToSpeakingName;
