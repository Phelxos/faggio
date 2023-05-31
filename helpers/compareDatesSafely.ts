import { isSameDay } from "date-fns";
import safeguardDate from "./safeguardDateAgainstTimezoneOffset";

/**
 * Compare dates safely with the timezone offset in mind.
 * @returns { Boolean } true if the dates are the same day
 */

export default function compareDatesSafely(
  dateA: Date | string,
  dateB: Date | string
): boolean {
  const safeDateA = safeguardDate(dateA);
  const safeDateB = safeguardDate(dateB);
  return isSameDay(safeDateA, safeDateB);
}
