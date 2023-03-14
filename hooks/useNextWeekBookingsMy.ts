import useBookings from "../stores/SBookings";
import useOffice from "../stores/SOffices";
import { getWeek } from "date-fns";
import IBooking from "../typings/interfaces/IBooking";
import { useContext } from "react";
import { CBookings } from "../components/contexts/CBookings";

export default function useNextWeekBookingsMy(): IBooking[] | undefined {
  const c = useContext(CBookings);
  const globallySelectedOffice = useOffice((s) => s.globallySelectedOffice);
  const bookings = useBookings((s) => s.bookings);
  const nextBookings = bookings.filter(({ date, office }) => {
    return (
      getWeek(new Date(date)) === getWeek(new Date()) + 1 &&
      office === (c?.locallySelectedOfficeName ?? globallySelectedOffice.city)
    );
  });
  return nextBookings ? nextBookings : undefined;
}
