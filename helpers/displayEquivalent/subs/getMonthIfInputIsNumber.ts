import {
  numbersToMonthsZeroIndexed,
  numbersToMonthsOneIndexed,
} from "./values";

const getMonthIfInputIsNumber = (
  input: number,
  isZeroIndexedCount: boolean
): string | undefined => {
  if (isZeroIndexedCount) {
    return numbersToMonthsZeroIndexed[input];
  } else if (!isZeroIndexedCount) {
    return numbersToMonthsOneIndexed[input];
  } else {
    return undefined;
  }
};

export default getMonthIfInputIsNumber;
