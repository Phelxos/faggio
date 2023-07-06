import { getWeek } from "date-fns";
import { useContext } from "react";
import { Context as BookingsContext } from "../app/(pages)/bookings/Context";
import safeguardDate from "../helpers/safeguardDateAgainstTimezoneOffset";
import useBookings from "../stores/SBookings";
import useOffice from "../stores/SOffices";
import IBooking from "../typings/interfaces/IBooking";

const useMyBookingsOfNextWeek = (passedCoworkerId: number): IBooking[] => {
  const context = useContext(BookingsContext);
  const globallySelectedOffice = useOffice((s) => s.globallySelectedOffice);
  const bookings = useBookings((s) => s.bookings);
  const nextBookings = bookings.filter(({ date, officeId, coworkerId }) => {
    return (
      getWeek(safeguardDate(date)) === getWeek(new Date()) + 1 &&
      officeId ===
        (context?.locallySelectedOfficeId ?? globallySelectedOffice.officeId) &&
      coworkerId === passedCoworkerId
    );
  });
  return nextBookings;
};

export default useMyBookingsOfNextWeek;
