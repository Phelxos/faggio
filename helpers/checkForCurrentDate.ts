import { isToday } from "date-fns";
import prepareDateAsDate from "./prepareDateAsDate";

export default function checkForCurrentDate(today: Date | string) {
  today = prepareDateAsDate(today);
  return isToday(today);
}
