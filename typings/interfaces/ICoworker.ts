import TCoworkerId from "../types/TCoworkerId";
import { TOfficeCityEnglish } from "../types/TOfficeCity";
import TPosition from "../types/TPosition";

export default interface ICoworker {
  forename: string;
  surname: string;
  officeId: number;
  imgSrc?: string;
  birthdayDate?: number;
  birthdayMonth?: number;
  employmentBeginning?: number;
  position: TPosition;
  projects?: {}[];
  coworkerId: TCoworkerId;
  favorites: number[];
  email: string;
  phone: string;
  messenger: string;
}
