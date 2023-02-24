import useBookings from "../stores/SBookings";
import { getWeek } from "date-fns";
import IBooking from "../typings/interfaces/IBooking";

export default function useNextWeekBookings(): IBooking[] | undefined {
  const bookings = useBookings((s) => s.bookings);
  const nextBookings = bookings.filter(({ date }) => {
    return getWeek(new Date(date)) === getWeek(new Date()) + 1;
  });
  return nextBookings ? nextBookings : undefined;
}
