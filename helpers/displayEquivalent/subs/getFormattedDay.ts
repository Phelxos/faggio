import { abbreviatedWeekdays, abbreviatedWeekdaysToFullWeekdays } from "./data";

const getFormattedDay = (input: string | number): string => {
  const isString = typeof input === "string";
  const isNumber = typeof input === "number";

  if (isString && abbreviatedWeekdays.includes(input)) {
    return abbreviatedWeekdaysToFullWeekdays.get(input);
  } else if (isNumber) {
    return abbreviatedWeekdays[input];
  } else {
    throw new Error("The input is not suitable.");
  }
};

export default getFormattedDay;
