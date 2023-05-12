/**
 * Prepare a date with the timezone offset in mind and the time set to 00:00.000 to be saved neatly in the database
 * @returns { Date } date in the format YYYY-MM-DDTHH:00:00.000Z
 */

export default function prepareDateAsDate(date: Date | string): Date {
  if (typeof date === "string") date = new Date(date);
  const timezoneOffsetInHours = (date.getTimezoneOffset() / 60) * -1;
  const dateWithAdjustedTime = new Date(
    date.setHours(timezoneOffsetInHours, 0, 0, 0)
  );
  const preparedDate = dateWithAdjustedTime;
  return preparedDate;
}
