import TCoworkerId from "../types/TCoworkerId";

export default interface IBooking {
  date: Date | string;
  officeId: number;
  coworkerId: TCoworkerId;
}
