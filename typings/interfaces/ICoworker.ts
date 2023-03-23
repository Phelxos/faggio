import TCoworkerId from "../types/TCoworkerId";
import TLocation from "../types/TOfficeCity";
import TPosition from "../types/TPosition";

export default interface ICoworker {
  forename: string;
  surname: string;
  office: TLocation;
  imgSrc?: string;
  birtday?: {
    date: number;
    month: number;
  };
  employmentBeginning?: number;
  position?: TPosition;
  projects?: {}[];
  coworkerId: TCoworkerId;
}
