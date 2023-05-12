import { useEffect, useRef } from "react";
import useBookings from "../stores/SBookings";
import useCalendar from "../stores/SCalendar";
import { isAfter, parseJSON } from "date-fns";
import IBooking from "../typings/interfaces/IBooking";
import prepareDateAsDate from "../helpers/prepareDateAsDate";

export default function useNextBooking(id: number):
  | {
      date: Date;
      officeId: number;
    }
  | undefined {
  const today = parseJSON(useCalendar((s) => s.today)); // Parse the date saved in JSON format for comparison
  const bookings = useBookings((s) => s.bookings);
  const nextBooking = useRef<IBooking | undefined>(undefined);

  nextBooking.current = bookings.find(({ date, coworkerId }) => {
    const timezoneAdjustedDate = prepareDateAsDate(date);
    if (isAfter(timezoneAdjustedDate, today))
      return isAfter(timezoneAdjustedDate, today) && coworkerId === id;
  });

  useEffect(() => {
    nextBooking.current = bookings.find(({ date, coworkerId }) => {
      const timezoneAdjustedDate = prepareDateAsDate(date);
      if (isAfter(timezoneAdjustedDate, today))
        return isAfter(timezoneAdjustedDate, today) && coworkerId === id;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today]);

  return nextBooking.current
    ? {
        date: new Date(nextBooking.current!.date),
        officeId: nextBooking.current!.officeId,
      }
    : undefined;
}
