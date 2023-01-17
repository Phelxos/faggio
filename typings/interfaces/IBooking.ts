import TOfficeCity from "../types/TOfficeCity";
import ICoworker from "./ICoworker";

export default interface IBooking {
  date: Date;
  office: TOfficeCity;
  coworker: ICoworker;
}
