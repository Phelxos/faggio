/**
 * Prepare a date with 'toJSON()' to be saved neatly in the database
 * @returns { String } date string in the format YYYY-MM-DDTHH:00:00.000Z
 */

export default function prepareDateAsString(date: Date | string): string {
  if (typeof date === "string") date = new Date(date);
  const preparedDate = date.toJSON();
  return preparedDate;
}
