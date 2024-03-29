const zeroTo11 = Array.from({ length: 12 }, (_, i) => i);
const oneTo12 = Array.from({ length: 12 }, (_, i) => i + 1);

const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const numbersAsStrings = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const abbreviatedWeekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

const abbreviatedWeekdaysToFullWeekdays = new Map();
abbreviatedWeekdaysToFullWeekdays.set("Mo", "montags");
abbreviatedWeekdaysToFullWeekdays.set("Di", "dienstags");
abbreviatedWeekdaysToFullWeekdays.set("Mi", "mittwochs");
abbreviatedWeekdaysToFullWeekdays.set("Do", "donnerstags");
abbreviatedWeekdaysToFullWeekdays.set("Fr", "freitags");

const numbersToMonthsZeroIndexed = zeroTo11.map((i) => months[i]);
const numbersToMonthsOneIndexed = oneTo12.map((i) => months[i - 1]);

export {
  months,
  numbersAsStrings,
  abbreviatedWeekdays,
  numbersToMonthsZeroIndexed,
  numbersToMonthsOneIndexed,
  abbreviatedWeekdaysToFullWeekdays,
};
