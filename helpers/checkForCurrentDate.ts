import { isToday } from "date-fns";
import safeguardDate from "./safeguardDateAgainstTimezoneOffset";

const checkForCurrentDate = (today: Date | string): boolean => {
  today = safeguardDate(today);
  return isToday(today);
};

export default checkForCurrentDate;
