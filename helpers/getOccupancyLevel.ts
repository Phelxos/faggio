import IBooking from "../typings/interfaces/IBooking";
import { isSameDay } from "date-fns";
import useOffice from "../stores/SOffices";
import TOfficeCity from "../typings/types/TOfficeCity";

export default function getOccupancyLevel(
  date: any,
  workstationCapacity: number,
  bookings: IBooking[],
  office: TOfficeCity
) {
  const bookingsNumber = bookings.filter(
    ({ date: bookingDate, office: bookingOffice }) => {
      return isSameDay(new Date(bookingDate), date && office === bookingOffice);
    }
  ).length;
  const occupancyRate = Math.round(
    (bookingsNumber / workstationCapacity) * 100
  );
  if (occupancyRate < 1) return 10;
  if (occupancyRate < 3) return 40;
  if (occupancyRate < 5) return 75;
  else return 90;
}
