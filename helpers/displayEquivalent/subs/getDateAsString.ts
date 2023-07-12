const getDateAsString = (
  input: string | number,
  isZeroIndexedCount: boolean
): string | undefined => {
  const isString = typeof input === "string";
  const isNumber = typeof input === "number";

  if (isZeroIndexedCount) {
    if (isString && input[0] === "0") {
      return (input[1] + 1).toString();
    } else if (isString && input[0] !== "0") {
      return (input + 1).toString();
    } else if (isNumber) {
      return (input + 1).toString();
    } else {
      return undefined;
    }
  } else if (!isZeroIndexedCount) {
    if (isString && input[0] === "0") {
      return input[1].toString();
    } else if (isString && input[0] !== "0") {
      return input.toString();
    } else if (isNumber) {
      return input.toString();
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};

export default getDateAsString;
