import { useEffect, useRef } from "react";
import useBookings from "../stores/SBookings";
import useCalendar from "../stores/SCalendar";
import { isAfter, parseISO, parseJSON } from "date-fns";
import { TOfficeCityEnglish } from "../typings/types/TOfficeCity";
import IBooking from "../typings/interfaces/IBooking";
import getSafeDate from "../helpers/getSafeDate";

export default function useNextBooking(id: number):
  | {
      date: Date;
      office: TOfficeCityEnglish;
    }
  | undefined {
  const today = parseJSON(useCalendar((s) => s.today)); // Parse the date saved in JSON format for comparison
  const bookings = useBookings((s) => s.bookings);
  const nextBooking = useRef<IBooking | undefined>(undefined);

  nextBooking.current = bookings.find(({ date, coworkerId }) => {
    const newDate = getSafeDate(date);
    if (isAfter(newDate, today))
      return isAfter(newDate, today) && coworkerId === id;
  });

  useEffect(() => {
    nextBooking.current = bookings.find(({ date, coworkerId }) => {
      const newDate = getSafeDate(date);
      if (isAfter(newDate, today))
        return isAfter(newDate, today) && coworkerId === id;
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
