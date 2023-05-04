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
export default function useOfficeNameFromId(
  id: number
): TOfficeCity | undefined {
  if (EOfficesEnglishToGerman[officeIdToName[id]]) {
    const officeName = EOfficesEnglishToGerman[officeIdToName[id]];
    return officeName;
  } else {
    return undefined;
  }
}
