import TCoworkerId from "../types/TCoworkerId";
import { TOfficeCityEnglish } from "../types/TOfficeCity";

export default interface IBooking {
  date: Date | string;
  office: TOfficeCityEnglish;
  coworker: TCoworkerId;
}
