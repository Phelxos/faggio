import useBookings from "../stores/SBookings";
import { isAfter } from "date-fns";
import { TOfficeCityEnglish } from "../typings/types/TOfficeCity";

export default function useNextBooking(id: number):
  | {
      date: Date;
      office: TOfficeCityEnglish;
    }
  | undefined {
  const today = new Date();
  const bookings = useBookings((s) => s.bookingsOther);

  const nextBooking = bookings.find(({ date, coworkerId }) => {
    if (isAfter(new Date(date), today))
      return isAfter(new Date(date), today) && coworkerId === id;
  });
  return nextBooking
    ? { date: new Date(nextBooking!.date), office: nextBooking.office }
    : undefined;
}
