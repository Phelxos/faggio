import { abbreviatedWeekdays } from "./values";
import { mainInput, targetedFormat } from "./types";
import checkIfIsSuitableArgument from "./subs/checkIfIsSuitableArgument";
import getMonthIfInputIsNumber from "./subs/getMonthIfInputIsNumber";

//Zweck: Darstellungsweise eines Datum bzw. dessen Teils (z.B. Monat) ändern (z.B. "07" in "Juni")
const displayEquivalent = (
  mainInput: mainInput,
  targetedFormat: targetedFormat,
  isZeroIndexedCount: boolean = true
): string | number | null => {
  const isNotSuitableArgument = checkIfIsSuitableArgument(mainInput);
  if (isNotSuitableArgument) return null;

  if (targetedFormat === "month") {
    if (typeof mainInput === "string") {
      if (isZeroIndexedCount) {
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
      } else if (!isZeroIndexedCount) {
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
          case "Januar":
            return 1;
          case "Februar":
            return 2;
          case "März":
            return 3;
          case "April":
            return 4;
          case "Mai":
            return 5;
          case "Juni":
            return 6;
          case "Juli":
            return 7;
          case "August":
            return 8;
          case "September":
            return 9;
          case "Oktober":
            return 10;
          case "November":
            return 11;
          case "Dezember":
            return 12;
          default:
            return null;
        }
      } else {
        return null;
      }
    } else if (typeof mainInput === "number") {
      return getMonthIfInputIsNumber(mainInput, isZeroIndexedCount);
    } else {
      return null;
    }
  } else if (targetedFormat === "date") {
    if (isZeroIndexedCount) {
      if (typeof mainInput === "string" && mainInput[0] === "0") {
        return (mainInput[1] + 1).toString();
      } else if (typeof mainInput === "string" && mainInput[0] !== "0") {
        return (mainInput + 1).toString();
      } else if (typeof mainInput === "number") {
        return (mainInput + 1).toString();
      } else {
        return null;
      }
    } else if (!isZeroIndexedCount) {
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
