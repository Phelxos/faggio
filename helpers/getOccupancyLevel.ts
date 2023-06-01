import IBooking from "../typings/interfaces/IBooking";
import { isSameDay } from "date-fns";

export default function getOccupancyLevel(
  date: any,
  workstationCapacity: number,
  bookings: IBooking[],
  officeId: number
) {
  const bookingsNumber = bookings.filter(
    ({ date: bookingDate, officeId: checkingOfficeId }) => {
      return isSameDay(
        new Date(bookingDate),
        date && officeId === checkingOfficeId
      );
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
