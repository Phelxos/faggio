import { getWeek } from "date-fns";
import { useContext } from "react";
import { CBookings } from "../app/(pages)/bookings/Context";
import useBookings from "../stores/SBookings";
import useOffice from "../stores/SOffices";
import IBooking from "../typings/interfaces/IBooking";
import safeguardDate from "../helpers/safeguardDateAgainstTimezoneOffset";

export default function useNextWeekBookings(
  passedCoworkerId: number
): IBooking[] | undefined {
  const c = useContext(CBookings);
  const globallySelectedOffice = useOffice((s) => s.globallySelectedOffice);
  const bookings = useBookings((s) => s.bookings);
  const nextBookings = bookings.filter(({ date, officeId, coworkerId }) => {
    return (
      getWeek(safeguardDate(date)) === getWeek(new Date()) + 1 &&
      officeId ===
        (c?.locallySelectedOfficeId ?? globallySelectedOffice.officeId) &&
      coworkerId === passedCoworkerId
    );
  });
  return nextBookings ? nextBookings : undefined;
}
