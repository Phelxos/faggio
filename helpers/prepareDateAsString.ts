import { add } from "date-fns";
import isTimeZero from "./isTimeZero";

/**
 * Prepare a date with 'toJSON()' to be saved neatly in the database.
 * (⚠️ Only works in GMT+0200 timezone!)
 * @returns { String } date string in the format 'YYYY-MM-DDTHH:00:00.000Z'
 * @param { Date | String } date - date to be prepared
 */

export default function prepareDateAsString(date: Date | string): string {
  let preparedDate = date;
  if (!isTimeZero(date)) {
    if (typeof date !== "string") preparedDate = date.toJSON();
    preparedDate = (preparedDate as string).replace(/T.*$/, "T00:00:00.000Z");
    return preparedDate as string;
  } else {
    if (typeof date !== "string") {
      preparedDate = add(date, { minutes: -new Date().getTimezoneOffset() });
      preparedDate = preparedDate.toJSON();
    }
    return preparedDate as string;
  }
}
