const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];
type targetedFormat = "day" | "month";

//Zweck: Darstellungsweise eines Datum bzw. dessen Teils (z.B. Monat) ändern (z.B. "07" in "Juni")
const displayEquivalent = (
  date: any,
  targetedFormat: targetedFormat,
  startsCountingAtZero: boolean = true
): any => {
  const error = "Something has gone wrong.";
  if (
    date == 0 ||
    date == 1 ||
    date == 2 ||
    date == 3 ||
    date == 4 ||
    date == 5 ||
    date == 6 ||
    date == 7 ||
    date == 8 ||
    date == 9 ||
    date === "01" ||
    date === "02" ||
    date === "03" ||
    date === "04" ||
    date === "05" ||
    date === "06" ||
    date === "07" ||
    date === "08" ||
    date === "09" ||
    date == 10 ||
    date == 11 ||
    date == 12 ||
    date == 13 ||
    date == 14 ||
    date == 15 ||
    date == 16 ||
    date == 17 ||
    date == 18 ||
    date == 19 ||
    date == 20 ||
    date == 21 ||
    date == 22 ||
    date == 23 ||
    date == 24 ||
    date == 25 ||
    date == 26 ||
    date == 27 ||
    date == 28 ||
    date == 29 ||
    date == 30 ||
    date == 31 ||
    months.includes(date)
  ) {
    if (targetedFormat === "month") {
      if (startsCountingAtZero) {
        switch (date) {
          case 0:
            return "Januar";
          case 1:
          case "01":
            return "Februar";
          case 2:
          case "02":
            return "März";
          case 3:
          case "03":
            return "April";
          case 4:
          case "04":
            return "Mai";
          case 5:
          case "05":
            return "Juni";
          case 6:
          case "06":
            return "Juli";
          case 7:
          case "07":
            return "August";
          case 8:
          case "08":
            return "September";
          case 9:
          case "09":
            return "Oktober";
          case 10:
            return "November";
          case 11:
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
            return error;
        }
      } else {
        switch (date) {
          case 1:
            return "Januar";
          case 2:
          case "02":
            return "Februar";
          case 3:
          case "03":
            return "März";
          case 4:
          case "04":
            return "April";
          case 5:
          case "05":
            return "Mai";
          case 6:
          case "06":
            return "Juni";
          case 7:
          case "07":
            return "Juli";
          case 8:
          case "08":
            return "August";
          case 9:
          case "09":
            return "September";
          case 10:
            return "Oktober";
          case 11:
            return "November";
          case 12:
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
            return error;
        }
      }
    } else if (targetedFormat === "day") {
      if (date[0] == 0) {
        return date[1].toString();
      } else {
        return date.toString();
      }
    } else {
      return error;
    }
  } else if (
    date === "Mo" ||
    date === "Di" ||
    date === "Mi" ||
    date === "Do" ||
    date === "Fr"
  ) {
    switch (date) {
      case "Mo":
        return "montags";
      case "Di":
        return "dienstags";
      case "Mi":
        return "mittwochs";
      case "Do":
        return "donnerstags";
      case "Fr":
        return "freitags";
      default:
        return error;
    }
  } else {
    return error;
  }
};

export default displayEquivalent;
