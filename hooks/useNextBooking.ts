"use client";

import { isAfter, parseJSON } from "date-fns";
import { useEffect, useRef } from "react";
import safeguardDate from "../helpers/safeguardDateAgainstTimezoneOffset";
import useBookings from "../stores/SBookings";
import useCalendar from "../stores/SCalendar";
import IBooking from "../typings/interfaces/IBooking";

const useNextBooking = (
  id: number
): {
  date: Date;
  officeId: number;
} => {
  const today = parseJSON(useCalendar((s) => s.today)); // Parse the date saved in JSON format for comparison
  const bookings = useBookings((s) => s.bookings);
  const nextBooking = useRef<IBooking | undefined>(undefined);

  nextBooking.current = bookings.find(({ date, coworkerId }) => {
    const safeDate = safeguardDate(date);
    if (isAfter(safeDate, today))
      return isAfter(safeDate, today) && coworkerId === id;
  });

  useEffect(() => {
    nextBooking.current = bookings.find(({ date, coworkerId }) => {
      const safeDate = safeguardDate(date);
      if (isAfter(safeDate, today))
        return isAfter(safeDate, today) && coworkerId === id;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [today]);

  if (nextBooking.current) {
    return {
      date: new Date(nextBooking.current!.date),
      officeId: nextBooking.current!.officeId,
    };
  } else {
    throw new Error(
      "🚨 No next booking has been found in the function 'useNextBooking'."
    );
  }
};

export default useNextBooking;
