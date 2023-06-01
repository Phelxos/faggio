import { isToday } from "date-fns";
import safeguardDate from "./safeguardDateAgainstTimezoneOffset";

export default function checkForCurrentDate(today: Date | string) {
  today = safeguardDate(today);
  return isToday(today);
}
