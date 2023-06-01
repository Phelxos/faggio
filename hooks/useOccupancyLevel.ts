import useBookings from "../stores/SBookings";
import useOffice from "../stores/SOffices";
import compareDatesSafely from "../helpers/compareDatesSafely";
import useAccount from "../stores/SAccount";

export default function useOccupancyLevel(
  date: any,
  workstationCapacity: number
) {
  const bookings = useBookings((s) => s.bookings);
  const IdOfLoggedInUser = useAccount((s) => s.coworkerId);
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const bookingsCount = bookings.filter(
    ({ date: toBeCheckedDate, officeId: toBeCheckedOfficeId, coworkerId }) => {
      return (
        compareDatesSafely(date, toBeCheckedDate) &&
        toBeCheckedOfficeId === globallySelectedOfficeId &&
        coworkerId !== IdOfLoggedInUser
      );
    }
  ).length;

  const occupancyRate = Math.round((bookingsCount / workstationCapacity) * 100); // Percent represented as a number between 0 and 100

  if (occupancyRate < 2) return 20;
  if (occupancyRate < 3) return 30;
  if (occupancyRate < 4) return 40;
  if (occupancyRate < 5) return 50;
  if (occupancyRate < 6) return 60;
  if (occupancyRate < 7) return 70;
  if (occupancyRate < 10) return 80;
  if (occupancyRate < 12) return 90;
  else return 95;
}
