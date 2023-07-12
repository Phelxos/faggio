import {
  abbreviatedWeekdays,
  abbreviatedWeekdaysToFullWeekdays,
} from "./values";

const getFormattedDay = (input: string | number): string | undefined => {
  const isString = typeof input === "string";
  const isNumber = typeof input === "number";

  if (isString && abbreviatedWeekdays.includes(input)) {
    return abbreviatedWeekdaysToFullWeekdays.get(input);
  } else if (isNumber) {
    return abbreviatedWeekdays[input];
  } else {
    return undefined;
  }
};

export default getFormattedDay;
