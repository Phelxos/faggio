import checkIfIsSuitableArgument from "./subs/checkIfIsSuitableArgument";
import getMonthIfInputIsNumber from "./subs/getMonthIfInputIsNumber";
import getMonthIfInputIsString from "./subs/getMonthIfInputIsString";
import getDateAsString from "./subs/getDateAsString";
import getFormattedDay from "./subs/getFormattedDay";

type targetedFormat = "month" | "date" | "day";

type mainInput = number | string;

/**
 * Converts a month-, date- or day-related input to another depiction of the input
 * @param {mainInput} mainInput - input to be converted
 * @param {targetedFormat} targetedFormat - requested type of the output
 * @param {boolean} isZeroIndexedCount - whether the input is zero-indexed or not, i.e. the counting of the months, dates, or days starts from 0 or 1
 */

const displayEquivalent = (
  mainInput: mainInput,
  targetedFormat: targetedFormat,
  isZeroIndexedCount: boolean = true
): string | number => {
  const isNotSuitableArgument = checkIfIsSuitableArgument(mainInput);
  try {
    if (isNotSuitableArgument) throw new Error("The argument is not suitable.");
  
    if (targetedFormat === "month") {
      if (typeof mainInput === "string") {
        return getMonthIfInputIsString(mainInput, isZeroIndexedCount);
      } else if (typeof mainInput === "number") {
        return getMonthIfInputIsNumber(mainInput, isZeroIndexedCount);
      } else {
        throw new Error("The input is not suitable.");
      }
    } else if (targetedFormat === "date") {
      return getDateAsString(mainInput, isZeroIndexedCount);
    } else if (targetedFormat === "day") {
      return getFormattedDay(mainInput);
    } else {
      throw new Error("The input is not suitable.");
    }
  } catch (error) {
    console.error(error);
    return "";
  }
};
export default displayEquivalent;
