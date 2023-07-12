import { months, numbersAsStrings } from "../values";

import { mainInput } from "../types";

const checkIfIsSuitableArgument = (mainInput: mainInput) => {
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
