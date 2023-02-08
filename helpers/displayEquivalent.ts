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
type targetedFormat = "date" | "month" | "day";

//Zweck: Darstellungsweise eines Datum bzw. dessen Teils (z.B. Monat) ändern (z.B. "07" in "Juni")
const displayEquivalent = (
  mainInput: any,
  targetedFormat: targetedFormat,
  startsCountingAtZero: boolean = true
): any => {
  console.log(mainInput);
  const error =
    "Something has gone wrong while trying to display the equivalent of a date, a month, or a day.";
  if (
    mainInput == 0 ||
    mainInput == 1 ||
    mainInput == 2 ||
    mainInput == 3 ||
    mainInput == 4 ||
    mainInput == 5 ||
    mainInput == 6 ||
    mainInput == 7 ||
    mainInput == 8 ||
    mainInput == 9 ||
    mainInput === "01" ||
    mainInput === "02" ||
    mainInput === "03" ||
    mainInput === "04" ||
    mainInput === "05" ||
    mainInput === "06" ||
    mainInput === "07" ||
    mainInput === "08" ||
    mainInput === "09" ||
    mainInput == 10 ||
    mainInput == 11 ||
    mainInput == 12 ||
    mainInput == 13 ||
    mainInput == 14 ||
    mainInput == 15 ||
    mainInput == 16 ||
    mainInput == 17 ||
    mainInput == 18 ||
    mainInput == 19 ||
    mainInput == 20 ||
    mainInput == 21 ||
    mainInput == 22 ||
    mainInput == 23 ||
    mainInput == 24 ||
    mainInput == 25 ||
    mainInput == 26 ||
    mainInput == 27 ||
    mainInput == 28 ||
    mainInput == 29 ||
    mainInput == 30 ||
    mainInput == 31 ||
    months.includes(mainInput)
  ) {
    if (targetedFormat === "month") {
      if (startsCountingAtZero) {
        switch (mainInput) {
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
        switch (mainInput) {
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
    } else if (targetedFormat === "date") {
      if (mainInput[0] == 0) {
        return mainInput[1].toString();
      } else {
        return mainInput.toString();
      }
    } else if (targetedFormat === "day") {
      console.log(mainInput);
      if (
        mainInput === "Mo" ||
        mainInput === "Di" ||
        mainInput === "Mi" ||
        mainInput === "Do" ||
        mainInput === "Fr"
      ) {
        switch (mainInput) {
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
      } else if (typeof mainInput === "number") {
        switch (mainInput) {
          case 0:
            return "So";
          case 1:
            return "Mo";
          case 2:
            return "Di";
          case 3:
            return "Mi";
          case 4:
            return "Do";
          case 5:
            return "Fr";
          case 6:
            return "Sa";
        }
      } else {
        return error;
      }
    } else {
      return error;
    }
  }
};
export default displayEquivalent;
