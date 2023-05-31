import { getDate, isPast, isSameDay, parseISO } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import mapCalendar from "../../../../helpers/mapCalendar";
import prepareDateAsDate from "../../../../helpers/prepareDateAsDate";
import useAccount from "../../../../stores/SAccount";
import useBookings from "../../../../stores/SBookings";
import useCalendar from "../../../../stores/SCalendar";
import IBooking from "../../../../typings/interfaces/IBooking";
import { CBookings } from "../../../contexts/CBookings";
import Head from "./TableHead";
import compareDatesSafely from "../../../../helpers/compareDatesSafely";

export default function CalBody() {
  const c = useContext(CBookings);

  const coworkerId: number = useAccount((s) => s.coworkerId);
  const bookings = useBookings((s) => s.bookings);
  const fetchBookings = useBookings((s) => s.fetchBookings);
  const today = useCalendar((s) => s.today);
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
      const timezoneAdjustedDate: Date = prepareDateAsDate(date);
      if (isPast(timezoneAdjustedDate)) return;
      const officeId = c!.locallySelectedOfficeId;
      if (
        !isBookedDate(timezoneAdjustedDate) &&
        !isBeingSelectedAsBookingToBeSaved(timezoneAdjustedDate) &&
        !isBeingSelectedAsBookingToBeDeleted(timezoneAdjustedDate)
      ) {
        c.setBookingsToBeSaved({
          date: timezoneAdjustedDate,
          coworkerId,
          officeId,
        });
      } else if (
        isBeingSelectedAsBookingToBeSaved(timezoneAdjustedDate) &&
        !isBookedDate(timezoneAdjustedDate)
      ) {
        c.deleteBookingsToBeSaved(timezoneAdjustedDate);
      } else if (
        isBookedDate(timezoneAdjustedDate) &&
        !isBeingSelectedAsBookingToBeDeleted(timezoneAdjustedDate)
      ) {
        c.setBookingsToBeDeleted({
          date: timezoneAdjustedDate,
          coworkerId,
          officeId,
        });
      } else if (
        isBookedDate(timezoneAdjustedDate) &&
        isBeingSelectedAsBookingToBeDeleted(timezoneAdjustedDate)
      ) {
        c.deleteBookingsToBeDeleted(timezoneAdjustedDate);
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
                        isSameDay(weekday.date, new Date(today)) &&
                        !c?.isBeingEdited &&
                        "rounded-full outline outline-2 -outline-offset-2 outline-emerald-500/50"
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
}
