const getMonthIfInputIsString = (
  input: string,
  isZeroIndexedCount: boolean
): number | string => {
  if (isZeroIndexedCount) {
    switch (input) {
      case "0":
      case "00":
        return "Januar";
      case "01":
        return "Februar";
      case "02":
        return "März";
      case "03":
        return "April";
      case "04":
        return "Mai";
      case "05":
        return "Juni";
      case "06":
        return "Juli";
      case "07":
        return "August";
      case "08":
        return "September";
      case "09":
        return "Oktober";
      case "10":
        return "November";
      case "11":
        return "Dezember";
      case "Januar":
        return 0;
      case "Februar":
        return 1;
      case "März":
        return 2;
      case "April":
        return 3;
      case "Mai":
        return 4;
      case "Juni":
        return 5;
      case "Juli":
        return 6;
      case "August":
        return 7;
      case "September":
        return 8;
      case "Oktober":
        return 9;
      case "November":
        return 10;
      case "Dezember":
        return 11;
      default:
        throw new Error("The input is not suitable.");
    }
  } else if (!isZeroIndexedCount) {
    switch (input) {
      case "01":
        return "Januar";
      case "02":
        return "Februar";
      case "03":
        return "März";
      case "04":
        return "April";
      case "05":
        return "Mai";
      case "06":
        return "Juni";
      case "07":
        return "Juli";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "Oktober";
      case "11":
        return "November";
      case "12":
        return "Dezember";
      case "Januar":
        return 1;
      case "Februar":
        return 2;
      case "März":
        return 3;
      case "April":
        return 4;
      case "Mai":
        return 5;
      case "Juni":
        return 6;
      case "Juli":
        return 7;
      case "August":
        return 8;
      case "September":
        return 9;
      case "Oktober":
        return 10;
      case "November":
        return 11;
      case "Dezember":
        return 12;
      default:
        throw new Error("The input is not suitable.");
    }
  } else {
    throw new Error("The input is not suitable.");
  }
};

export default getMonthIfInputIsString;
