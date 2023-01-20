import TCoworkerId from "../types/TCoworkerId";
import TLocation from "../types/TOfficeCity";

export default interface ICoworker {
  forename: string;
  surname: string;
  office: TLocation;
  imgSrc?: string;
  id: TCoworkerId;
}
