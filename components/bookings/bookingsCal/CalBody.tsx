import React, { useState, useEffect, useContext } from "react";
import useCalendar from "../../../stores/SCalendar";
import useBookings from "../../../stores/SBookings";
import mapCalendar from "../../../helpers/mapCalendar";
import { getDate } from "date-fns";
import { CBookings } from "../../contexts/CBookings";
import TCoworkerId from "../../../typings/types/TCoworkerId";
import TOfficeCity from "../../../typings/types/TOfficeCity";
import IBooking from "../../../typings/interfaces/IBooking";

export default function CalBody() {
  const context = useContext(CBookings);
  const bookings = useBookings((s) => s.bookings);
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const displayedWeekdays = useCalendar((s) => s.displayedWeekdays);
  const [displayedMonth, setDisplayedMonth]: any[] = useState(() => {
    return mapCalendar(selectedMonth, selectedYear);
  });
  const isBookedDate = (date: Date): boolean => {
    if (
      bookings.some(
        (b: IBooking) =>
          +b.date === +date && b.office === context?.locallySelectedOfficeName
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  const isBeingSelectedAsBookingToBeSaved = (date: Date): boolean => {
    if (
      context?.bookingsToBeSaved.some(
        (b: IBooking) =>
          +b.date === +date && b.office === context?.locallySelectedOfficeName
      )
    ) {
      return true;
    } else {
      return false;
    }
  };
  const handleDateClick = (weekday: any) => {
    if (context?.isBeingEdited) {
      const currentlyClickedDate = weekday.date;
      if (
        !isBookedDate(currentlyClickedDate) &&
        !isBeingSelectedAsBookingToBeSaved(currentlyClickedDate)
      ) {
        const date = new Date(currentlyClickedDate);
        const coworker: TCoworkerId = 9999;
        const office: TOfficeCity = context!.locallySelectedOfficeName;
        context.setBookingsToBeSaved({ date, coworker, office });
      } else if (isBeingSelectedAsBookingToBeSaved(currentlyClickedDate)) {
        context.deleteBookingsToBeSaved(currentlyClickedDate);
      }
    }
  };

  useEffect(() => {
    setDisplayedMonth(mapCalendar(selectedMonth, selectedYear));
  }, [selectedYear, selectedMonth, displayedWeekdays]);

  useEffect(() => {
    console.dir(context?.bookingsToBeSaved);
  }, [context?.bookingsToBeSaved]);

  return (
    <table className="w-full grow table-fixed border-x-[6px] border-emerald-900">
      <thead className="bg-slate-800 font-mono">
        <tr>
          {displayedWeekdays.map((weekday: string, i: number) => {
            if (weekday === "Sa" || weekday === "So") {
              return null;
            } else if (weekday === "KW") {
              return (
                <th
                  key={i}
                  className="border-r-4 border-slate-900 p-2 text-center text-sm text-slate-500 opacity-75"
                >
                  {weekday}
                </th>
              );
            } else {
              return (
                <th
                  key={i}
                  className="p-2 text-center font-bold text-slate-400"
                >
                  {weekday}
                </th>
              );
            }
          })}
        </tr>
      </thead>
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
                      className="border-r-4 border-slate-800 p-2 text-center font-mono text-sm font-bold opacity-50 hover:cursor-pointer hover:bg-emerald-200"
                    >
                      {weekday.calWeek}
                    </td>
                  );
                } else {
                  return (
                    <td
                      key={i}
                      className={`m-2 cursor-pointer p-2 text-center text-3xl hover:rounded-lg hover:bg-slate-200 ${
                        isBookedDate(weekday.date) ? "font-bold" : "font-light"
                      } ${
                        isBeingSelectedAsBookingToBeSaved(weekday.date)
                          ? "bg-emerald-300"
                          : "bg-slate-900"
                      }`}
                      onClick={() => handleDateClick(weekday)}
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
