export default function getDate(date: string | Date) {
  if (typeof date === "object") {
    return date;
  } else {
    return new Date(date);
  }
}
