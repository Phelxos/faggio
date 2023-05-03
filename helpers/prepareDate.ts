/**
 * Prepare a date with 'toISOString() and the time set to 00:00.000 to be saved neatly in the database
 * @returns { String } date string in the format YYYY-MM-DDTHH:00:00.000Z
 */

export default function prepareDate(date: Date | string): string {
  if (typeof date === "string") date = new Date(date);
  const dateWithAdjustedTime = new Date(date.setHours(0, 0, 0, 0));
  const preparedDate = new Date(dateWithAdjustedTime).toISOString();
  return preparedDate;
}
