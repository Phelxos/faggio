/**
 * Prepare a date with the timezone offset in mind: Set the hours to '12', so timezone offsets in smaller dimensions as in Europe are not altering the date.
 * @returns { Date } date with the hours set to '12'
 */

export default function safeguardDate(date: Date | string): Date {
  const preparedDate = new Date(date);
  const safeDate = new Date(preparedDate.setHours(12, 0, 0, 0));
  return safeDate;
}
