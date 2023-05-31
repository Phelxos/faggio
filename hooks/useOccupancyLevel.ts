import { isSameDay } from "date-fns";
import useBookings from "../stores/SBookings";
import useOffice from "../stores/SOffices";
import prepareDateAsDate from "../helpers/prepareDateAsDate";

export default function useOccupancyLevel(
  date: any,
  workstationCapacity: number
) {
  const bookings = useBookings((s) => s.bookings);
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const bookingsCount = bookings.filter(
    ({ date: toBeCheckedDate, officeId: toBeCheckedOfficeId }) => {
      return (
        isSameDay(
          prepareDateAsDate(toBeCheckedDate),
          prepareDateAsDate(date)
        ) && toBeCheckedOfficeId === globallySelectedOfficeId
      );
    }
  ).length;

  const occupancyRate = Math.round((bookingsCount / workstationCapacity) * 100);
  if (occupancyRate < 1) return 10;
  if (occupancyRate < 3) return 40;
  if (occupancyRate < 5) return 75;
  else return 90;
}
