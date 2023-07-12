import {
  numbersToMonthsZeroIndexed,
  numbersToMonthsOneIndexed,
} from "./../values";

const getMonthIfInputIsNumber = (
  input: number,
  isZeroIndexedCount: boolean
): string | null => {
  if (isZeroIndexedCount) {
    return numbersToMonthsZeroIndexed[input];
  } else if (!isZeroIndexedCount) {
    return numbersToMonthsOneIndexed[input];
  } else {
    return null;
  }
};

export default getMonthIfInputIsNumber;
