import checkIfIsSuitableArgument from "./subs/checkIfIsSuitableArgument";
import getMonthIfInputIsNumber from "./subs/getMonthIfInputIsNumber";
import getMonthIfInputIsString from "./subs/getMonthIfInputIsString";
import getDateAsString from "./subs/getDateAsString";
import getFormattedDay from "./subs/getFormattedDay";

type targetedFormat = "month" | "date" | "day";

type mainInput = number | string;

//Zweck: Darstellungsweise eines Datum bzw. dessen Teils (z.B. Monat) ändern (z.B. "07" in "Juni")
const displayEquivalent = (
  mainInput: mainInput,
  targetedFormat: targetedFormat,
  isZeroIndexedCount: boolean = true
): string | number | undefined => {
  const isNotSuitableArgument = checkIfIsSuitableArgument(mainInput);
  if (isNotSuitableArgument) return undefined;

  if (targetedFormat === "month") {
    if (typeof mainInput === "string") {
      return getMonthIfInputIsString(mainInput, isZeroIndexedCount);
    } else if (typeof mainInput === "number") {
      return getMonthIfInputIsNumber(mainInput, isZeroIndexedCount);
    } else {
      return undefined;
    }
  } else if (targetedFormat === "date") {
    return getDateAsString(mainInput, isZeroIndexedCount);
  } else if (targetedFormat === "day") {
    return getFormattedDay(mainInput);
  } else {
    return undefined;
  }
};
export default displayEquivalent;
