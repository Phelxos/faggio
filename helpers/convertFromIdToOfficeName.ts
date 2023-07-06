import TOfficeCity, {
  EOfficesEnglishToGerman,
  TOfficeCityEnglish,
} from "../typings/types/TOfficeCity";

interface IOfficeIdToName {
  [key: number]: TOfficeCityEnglish;
}

const officeIdToName: IOfficeIdToName = {
  10: "dortmund",
  11: "hamburg",
  12: "bremen",
  13: "berlin",
  14: "cologne",
  15: "leipzig",
  16: "munich",
  17: "frankfurt",
};

// TO-DO Implement global language to change the offices' names accordingly
const convertFromIdToOfficeName = (id: number): TOfficeCity => {
  if (EOfficesEnglishToGerman[officeIdToName[id]]) {
    const officeName = EOfficesEnglishToGerman[officeIdToName[id]];
    return officeName;
  } else {
    throw new Error(
      `🚨 The office name for the id ${id} could not be found in the function 'convertFromIdToOfficeName'.`
    );
  }
};

export default convertFromIdToOfficeName;
