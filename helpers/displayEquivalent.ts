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

const abbreviatedWeekdays = ["Mo", "Di", "Mi", "Do", "Fr"];

type targetedFormat = "month" | "date" | "day";

//Zweck: Darstellungsweise eines Datum bzw. dessen Teils (z.B. Monat) ändern (z.B. "07" in "Juni")
const displayEquivalent = (
  mainInput: number | string,
  targetedFormat: targetedFormat,
  startsCountingAtZero: boolean = true
): string | number | null => {
  const isNotNumberBetween0And31 = !(
    typeof mainInput === "number" &&
    0 <= mainInput &&
    mainInput <= 31
  );
  const isNotAptString = !(
    typeof mainInput === "string" &&
    (months.includes(mainInput) || numbersAsStrings.includes(mainInput))
  );
  const isNotSuitableArgument = isNotNumberBetween0And31 && isNotAptString;
  if (isNotSuitableArgument) return null;

  if (targetedFormat === "month") {
    if (typeof mainInput === "string") {
      if (startsCountingAtZero) {
        switch (mainInput) {
          case "0":
          case "00":
            return "Januar";
          case "01":
            return "Februar";
          case "02":
            return "März";
          case "03":
            return "April";
          case "04":
            return "Mai";
          case "05":
            return "Juni";
          case "06":
            return "Juli";
          case "07":
            return "August";
          case "08":
            return "September";
          case "09":
            return "Oktober";
          case "10":
            return "November";
          case "11":
            return "Dezember";
          case "Januar":
            return 0;
          case "Februar":
            return 1;
          case "März":
            return 2;
          case "April":
            return 3;
          case "Mai":
            return 4;
          case "Juni":
            return 5;
          case "Juli":
            return 6;
          case "August":
            return 7;
          case "September":
            return 8;
          case "Oktober":
            return 9;
          case "November":
            return 10;
          case "Dezember":
            return 11;
          default:
            return null;
        }
      } else if (!startsCountingAtZero) {
        switch (mainInput) {
          case "01":
            return "Januar";
          case "02":
            return "Februar";
          case "03":
            return "März";
          case "04":
            return "April";
          case "05":
            return "Mai";
          case "06":
            return "Juni";
          case "07":
            return "Juli";
          case "08":
            return "August";
          case "09":
            return "September";
          case "10":
            return "Oktober";
          case "11":
            return "November";
          case "12":
            return "Dezember";
          default:
            return null;
        }
      } else {
        return null;
      }
    } else if (typeof mainInput === "number") {
      if (startsCountingAtZero) {
        switch (mainInput) {
          case 0:
            return "Januar";
          case 1:
            return "Februar";
          case 2:
            return "März";
          case 3:
            return "April";
          case 4:
            return "Mai";
          case 5:
            return "Juni";
          case 6:
            return "Juli";
          case 7:
            return "August";
          case 8:
            return "September";
          case 9:
            return "Oktober";
          case 10:
            return "November";
          case 11:
            return "Dezember";
          default:
            return null;
        }
      } else if (!startsCountingAtZero) {
        switch (mainInput) {
          case 1:
            return "Januar";
          case 2:
            return "Februar";
          case 3:
            return "März";
          case 4:
            return "April";
          case 5:
            return "Mai";
          case 6:
            return "Juni";
          case 7:
            return "Juli";
          case 8:
            return "August";
          case 9:
            return "September";
          case 10:
            return "Oktober";
          case 11:
            return "November";
          case 12:
            return "Dezember";
          default:
            return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else if (targetedFormat === "date") {
    if (startsCountingAtZero) {
      if (typeof mainInput === "string" && mainInput[0] === "0") {
        return (mainInput[1] + 1).toString();
      } else if (typeof mainInput === "string" && mainInput[0] !== "0") {
        return (mainInput + 1).toString();
      } else if (typeof mainInput === "number") {
        return (mainInput + 1).toString();
      } else {
        return null;
      }
    } else if (!startsCountingAtZero) {
      if (typeof mainInput === "string" && mainInput[0] === "0") {
        return mainInput[1].toString();
      } else if (typeof mainInput === "string" && mainInput[0] !== "0") {
        return mainInput.toString();
      } else if (typeof mainInput === "number") {
        return mainInput.toString();
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else if (targetedFormat === "day") {
    if (
      typeof mainInput === "string" &&
      abbreviatedWeekdays.includes(mainInput)
    ) {
      switch (mainInput) {
        case "Mo":
          return "montags";
        case "Di":
          return "dienstags";
        case "Mi":
          return "mittwochs";
        case "Do":
          return "donnerstags";
        case "Fr":
          return "freitags";
        default:
          return null;
      }
    } else if (typeof mainInput === "number") {
      switch (mainInput) {
        case 0:
          return "So";
        case 1:
          return "Mo";
        case 2:
          return "Di";
        case 3:
          return "Mi";
        case 4:
          return "Do";
        case 5:
          return "Fr";
        case 6:
          return "Sa";
        default:
          return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
};
export default displayEquivalent;
