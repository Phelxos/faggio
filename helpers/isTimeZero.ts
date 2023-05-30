export default function isTimeZero(date: Date | string) {
  if (typeof date === "string") {
    return date.endsWith("T00:00:00.000Z");
  } else {
    return (
      date.getHours() === 0 &&
      date.getMinutes() === 0 &&
      date.getSeconds() === 0 &&
      date.getMilliseconds() === 0
    );
  }
}
