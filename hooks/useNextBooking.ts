import { useEffect, useRef } from "react";
import useBookings from "../stores/SBookings";
import useCalendar from "../stores/SCalendar";
import { isAfter } from "date-fns";
import { TOfficeCityEnglish } from "../typings/types/TOfficeCity";
import IBooking from "../typings/interfaces/IBooking";

export default function useNextBooking(id: number):
  | {
      date: Date;
      office: TOfficeCityEnglish;
    }
  | undefined {
  const today = useCalendar((s) => s.today);
  const bookings = useBookings((s) => s.bookingsOther);
  const nextBooking = useRef<IBooking | undefined>(undefined);

  nextBooking.current = bookings.find(({ date, coworkerId }) => {
    if (isAfter(new Date(date), today))
      return isAfter(new Date(date), today) && coworkerId === id;
  });

  useEffect(() => {
    nextBooking.current = bookings.find(({ date, coworkerId }) => {
      if (isAfter(new Date(date), today))
        return isAfter(new Date(date), today) && coworkerId === id;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today]);

  return nextBooking.current
    ? {
        date: new Date(nextBooking.current!.date),
        office: nextBooking.current!.office,
      }
    : undefined;
}
