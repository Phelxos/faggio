import useBookings from "../stores/SBookings";
import { isAfter } from "date-fns";

export default function useNextBookingMy(): Date | undefined {
  const today = new Date();
  const bookings = useBookings((s) => s.bookings);
  const nextBooking = bookings.find(({ date }) =>
    isAfter(new Date(date), today)
  );

  return nextBooking ? new Date(nextBooking!.date) : undefined;
}
