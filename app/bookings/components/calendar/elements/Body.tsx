"use client";

import { getDate, isPast, isToday } from "date-fns";
import { FC, useContext, useEffect, useState } from "react";
import { CBookings } from "../../../../../components/contexts/CBookings";
import compareDatesSafely from "../../../../../helpers/compareDatesSafely";
import mapCalendar from "../../../../../helpers/mapCalendar";
import safeguardDate from "../../../../../helpers/safeguardDateAgainstTimezoneOffset";
import useAccount from "../../../../../stores/SAccount";
import useBookings from "../../../../../stores/SBookings";
import useCalendar from "../../../../../stores/SCalendar";
import IBooking from "../../../../../typings/interfaces/IBooking";
import Head from "./BodyHead";

const Body: FC = () => {
  const c = useContext(CBookings);

  const coworkerId: number = useAccount((s) => s.coworkerId);
  const bookings = useBookings((s) => s.bookings);
  const fetchBookings = useBookings((s) => s.fetchBookings);
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);

  const [displayedMonth, setDisplayedMonth]: any[] = useState(() => {
    return mapCalendar(selectedMonth, selectedYear);
  });

  const isBookedDate = (date: Date): boolean => {
    if (
      bookings.some((b: IBooking) => {
        return (
          compareDatesSafely(date, b.date) &&
          b.officeId === c?.locallySelectedOfficeId &&
          b.coworkerId === coworkerId
        );
      })
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isBeingSelectedAsBookingToBeSaved = (date: Date): boolean => {
    if (
      c?.bookingsToBeSaved.some(
        (b: IBooking) =>
          compareDatesSafely(date, b.date) &&
          b.officeId === c?.locallySelectedOfficeId
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isBeingSelectedAsBookingToBeDeleted = (date: Date): boolean => {
    if (
      c?.bookingsToBeDeleted.some(
        (b: IBooking) =>
          compareDatesSafely(date, b.date) &&
          b.officeId === c?.locallySelectedOfficeId
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleDateClick = (date: Date | string) => {
    if (c?.isBeingEdited) {
      // Ensure using date object
      const safeDate: Date = safeguardDate(date);
      if (isPast(safeDate) && !isBookedDate(safeDate)) return;
      const officeId = c!.locallySelectedOfficeId;
      if (
        !isBookedDate(safeDate) &&
        !isBeingSelectedAsBookingToBeSaved(safeDate) &&
        !isBeingSelectedAsBookingToBeDeleted(safeDate)
      ) {
        c.setBookingsToBeSaved({
          date: safeDate,
          coworkerId,
          officeId,
        });
      } else if (
        isBeingSelectedAsBookingToBeSaved(safeDate) &&
        !isBookedDate(safeDate)
      ) {
        c.deleteBookingsToBeSaved(safeDate);
      } else if (
        isBookedDate(safeDate) &&
        !isBeingSelectedAsBookingToBeDeleted(safeDate)
      ) {
        c.setBookingsToBeDeleted({
          date: safeDate,
          coworkerId,
          officeId,
        });
      } else if (
        isBookedDate(safeDate) &&
        isBeingSelectedAsBookingToBeDeleted(safeDate)
      ) {
        c.deleteBookingsToBeDeleted(safeDate);
      }
    }
  };

  useEffect(() => {
    setDisplayedMonth(mapCalendar(selectedMonth, selectedYear));
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    fetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c?.locallySelectedOfficeId, bookings]);

  return (
    <table className="w-full grow table-fixed">
      <Head />
      <tbody>
        {displayedMonth.map((week: any[], i: number) => {
          return (
            <tr
              key={i}
              className={`${
                i % 2 === 0
                  ? "bg-slate-600 text-slate-300"
                  : "bg-slate-700 text-slate-400"
              }`}
            >
              {week.map((weekday: any, i: number) => {
                if (weekday.isNoDayOfMonth) {
                  return <td key={i}></td>;
                } else if (weekday.calWeek) {
                  return (
                    <td
                      key={i}
                      className="border-r-4 border-slate-800 p-2 text-center font-mono text-sm font-bold opacity-50"
                    >
                      {weekday.calWeek}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={i}
                      className={`cursor-pointer text-center text-3xl ${
                        isBookedDate(weekday.date) &&
                        !isBeingSelectedAsBookingToBeDeleted(weekday.date)
                          ? "rounded-xl bg-slate-300 font-bold text-slate-700 hover:rounded-xl hover:bg-slate-100"
                          : "font-light hover:rounded-xl hover:bg-slate-400 hover:text-slate-800"
                      } ${
                        isBeingSelectedAsBookingToBeSaved(weekday.date)
                          ? "rounded-full bg-green-300/50 text-green-800 hover:rounded-full hover:bg-green-300/75 hover:text-green-600"
                          : isBeingSelectedAsBookingToBeDeleted(weekday.date)
                          ? "rounded-full bg-red-300/50 text-red-800 line-through hover:rounded-full hover:bg-red-300/75 hover:text-red-600"
                          : ""
                      } ${
                        isToday(weekday.date) &&
                        !c?.isBeingEdited &&
                        "rounded-full outline outline-2 -outline-offset-2 outline-emerald-500/50"
                      } ${
                        isPast(weekday.date) &&
                        !isToday(weekday.date) &&
                        "opacity-50"
                      } ${
                        isToday(weekday.date) &&
                        isBookedDate(weekday.date) &&
                        "animate-pulse bg-emerald-500"
                      }
                      `}
                      onClick={() => handleDateClick(weekday.date)}
                    >
                      {getDate(weekday.date)}
                    </td>
                  );
                }
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Body;
