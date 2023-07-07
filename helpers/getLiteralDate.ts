import { isTomorrow, isYesterday, getWeek } from "date-fns";

const getLiteralDate = (date: Date): string => {
  if (!date)
    throw new Error(
      "🚨 No date has been provided to the function 'getLiteralDate'."
    );
  const wholeDate = date.toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
  const weekday = wholeDate.split(",")[0];

  if (isTomorrow(date)) {
    return "morgen";
  } else if (isYesterday(date)) {
    return "gestern";
  } else if (getWeek(date) != getWeek(new Date())) {
    return `kommende Woche ${weekday}`;
  } else {
    return weekday;
  }
};

export default getLiteralDate;
