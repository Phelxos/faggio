import useBookings from "../stores/SBookings";
import { isAfter } from "date-fns";

export default function useNextBooking(id: number): Date | undefined {
  const today = new Date();
  const bookings = useBookings((s) => s.bookingsOther);

  const nextBooking = bookings.find(({ date, coworkerId }) => {
    if (isAfter(new Date(date), today))
      console.log(
        "🚀 ~ file: useNextBooking.ts:10 ~ nextBooking ~ isAfter(new Date(date), today):",
        isAfter(new Date(date), today)
      );
    console.log(coworkerId);
    return isAfter(new Date(date), today) && coworkerId === id;
  });
  return nextBooking ? new Date(nextBooking!.date) : undefined;
}
