const getDateAsString = (
  input: string | number,
  isZeroIndexedCount: boolean
): string => {
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
      throw new Error("The input is not suitable.");
    }
  } else if (!isZeroIndexedCount) {
    if (isString && input[0] === "0") {
      return input[1].toString();
    } else if (isString && input[0] !== "0") {
      return input.toString();
    } else if (isNumber) {
      return input.toString();
    } else {
      throw new Error("The input is not suitable.");
    }
  } else {
    throw new Error("The input is not suitable.");
  }
};

export default getDateAsString;
