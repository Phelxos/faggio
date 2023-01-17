import TCoworkerId from "../types/TCoworkerId";
import TOfficeCity from "../types/TOfficeCity";

export default interface IBooking {
  date: Date;
  office: TOfficeCity;
  coworker: TCoworkerId;
}
