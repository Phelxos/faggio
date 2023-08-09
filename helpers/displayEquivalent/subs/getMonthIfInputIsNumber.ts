import { numbersToMonthsZeroIndexed, numbersToMonthsOneIndexed } from "./data";

const getMonthIfInputIsNumber = (
  input: number,
  isZeroIndexedCount: boolean
): string => {
  if (isZeroIndexedCount) {
    return numbersToMonthsZeroIndexed[input];
  } else if (!isZeroIndexedCount) {
    return numbersToMonthsOneIndexed[input];
  } else {
    throw new Error("The input is not suitable.");
  }
};

export default getMonthIfInputIsNumber;
