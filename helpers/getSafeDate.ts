import { parseISO } from "date-fns";

/**
 * @description Formats a date string or Date object into a Date object ensuring it complies with the UTC format
 * @returns Date object in UTC format (e.g. Wed, 14 Jun 2017 07:00:00 GMT)
 */

export default function getSafeDate(date: string | Date): Date {
  let newDate: Date;
  if (typeof date === "string") {
    newDate = new Date(parseISO(date));
  } else if (typeof date === "object") {
    newDate = new Date(date);
  } else {
    throw new Error("Invalid parameter type");
  }
  return newDate;
}
