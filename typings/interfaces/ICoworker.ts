import TCoworkerId from "../types/TCoworkerId";
import { TOfficeCityEnglish } from "../types/TOfficeCity";
import TPosition from "../types/TPosition";

export default interface ICoworker {
  forename: string;
  surname: string;
  office: TOfficeCityEnglish;
  imgSrc?: string;
  birtday?: {
    date: number;
    month: number;
  };
  employmentBeginning?: number;
  position?: TPosition;
  projects?: {}[];
  coworkerId: TCoworkerId;
  favorites: number[];
  email: string;
  phone: string;
  messenger: string;
}
