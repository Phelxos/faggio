import TCoworkerId from "../types/TCoworkerId";
import { TOfficeCityEnglish } from "../types/TOfficeCity";

export default interface IBooking {
  date: Date;
  office: TOfficeCityEnglish;
  coworker: TCoworkerId;
}
