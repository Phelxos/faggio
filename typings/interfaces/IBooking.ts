import TOfficeCity from "../types/TOfficeCity";
import IColleague from "./IColleague";

export default interface IBooking {
  date: Date;
  office: TOfficeCity;
}
