import { isTomorrow, isYesterday, getWeek } from "date-fns";

export default function getLiteralDate(
  date: Date | undefined
): string | undefined {
  if (!date) return undefined;
  const wholeDate = date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const weekday = wholeDate.split(",")[0];

  if (isTomorrow(date)) {
    return "morgen";
  }
  if (isYesterday(date)) {
    return "gestern";
  }
  if (getWeek(date) != getWeek(new Date())) {
    return `kommende Woche ${weekday}`;
  }
  return weekday;
}
