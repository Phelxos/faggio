import { mainInput, targetedFormat } from "./types";
import checkIfIsSuitableArgument from "./subs/checkIfIsSuitableArgument";
import getMonthIfInputIsNumber from "./subs/getMonthIfInputIsNumber";
import getMonthIfInputIsString from "./subs/getMonthIfInputIsString";
import getDateAsString from "./subs/getDateAsString";
import getFormattedDay from "./subs/getFormattedDay";

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
      return getMonthIfInputIsString(mainInput, isZeroIndexedCount);
    } else if (typeof mainInput === "number") {
      return getMonthIfInputIsNumber(mainInput, isZeroIndexedCount);
    } else {
      return null;
    }
  } else if (targetedFormat === "date") {
    return getDateAsString(mainInput, isZeroIndexedCount);
  } else if (targetedFormat === "day") {
    return getFormattedDay(mainInput);
  } else {
    return null;
  }
};
export default displayEquivalent;
