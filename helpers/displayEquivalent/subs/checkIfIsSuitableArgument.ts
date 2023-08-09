import { months, numbersAsStrings } from "./data";

const checkIfIsSuitableArgument = (mainInput: number | string) => {
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

  return isNotSuitableArgument;
};

export default checkIfIsSuitableArgument;
