import { getDate, getDay, isSameDay } from "date-fns";
import React, { useEffect, useState } from "react";
import prepareDateAsDate from "../../../../helpers/prepareDateAsDate";
import useWeekCurrent from "../../../../hooks/useWeekCurrent";
import useWeekNext from "../../../../hooks/useWeekNext";
import useBookings from "../../../../stores/SBookings";
import useCalendar from "../../../../stores/SCalendar";
import useOffice from "../../../../stores/SOffices";
import CalendarWeek from "./PreviewWeekCalendarWeek";
import Day from "./PreviewWeekDay";

export default function PreviewWeek() {
  const bookings = useBookings((s) => s.bookings);
  const today = useCalendar((s) => s.today);
  const calWeek = useCalendar((s) => s.currentCalWeek);
  const globallySelectedOfficeId = useOffice(
    (s) => s.globallySelectedOffice
  ).officeId;

  const nextWeek = useWeekNext();
  const currentWeek = useWeekCurrent();

  const [isShowingNextWeekBookings, setIsShowingNextWeekBookings] =
    useState<boolean>(false);
  const [
    countOfOtherBookingsInSelectedWeek,
    setCountOfOtherBookingsInSelectedWeek,
  ] = useState<{ count: number; date: Date }[]>([]);

  useEffect(() => {
    const weekdayToday = getDate(today);
    if (weekdayToday === 0 || weekdayToday > 3) {
      setIsShowingNextWeekBookings(true);
    }
  }, [today]);

  useEffect(() => {
    let newWeekBookingsOtherCount;
    if (isShowingNextWeekBookings) {
      newWeekBookingsOtherCount = nextWeek.map(({ date }) => {
        const timezoneAdjustedDate = prepareDateAsDate(date);
        const count = bookings.filter(({ date, officeId }) => {
          return (
            isSameDay(new Date(date), timezoneAdjustedDate) &&
            globallySelectedOfficeId === officeId
          );
        }).length;
        return { count, date };
      });
      setCountOfOtherBookingsInSelectedWeek(newWeekBookingsOtherCount);
    } else {
      newWeekBookingsOtherCount = currentWeek.map(({ date }) => {
        const timezoneAdjustedDate = prepareDateAsDate(date);
        const count = bookings.filter(({ date, officeId }) => {
          return (
            isSameDay(new Date(date), timezoneAdjustedDate) &&
            globallySelectedOfficeId === officeId
          );
        }).length;
        return { count, date };
      });
      setCountOfOtherBookingsInSelectedWeek(newWeekBookingsOtherCount);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookings, isShowingNextWeekBookings]);

  useEffect(() => {
    const isThursdayOrLater =
      getDay(new Date()) === 0 || getDay(new Date()) > 3;
    setIsShowingNextWeekBookings(isThursdayOrLater);
  }, [today]);

  return (
    <div>
      <p className="mb-3 text-4xl font-thin text-slate-400/75">
        Wochenübersicht
      </p>
      <div className="flex h-[120px] rounded bg-emerald-900/75 p-1 text-emerald-200/75 shadow-md">
        <CalendarWeek
          isShowingNextWeekBookings={isShowingNextWeekBookings}
          calWeek={calWeek}
        />
        <div className="flex grow items-center">
          {(isShowingNextWeekBookings ? nextWeek : currentWeek).map(
            ({ dateNumber, name: weekday, date }, i) => {
              return (
                <Day
                  weekday={weekday}
                  dateNumber={dateNumber}
                  date={date}
                  i={i}
                  countsOfOtherBookings={countOfOtherBookingsInSelectedWeek}
                  key={i * 4}
                />
              );
            }
          )}
        </div>
      </div>
      <p className="mt-3 text-right text-xs font-semibold text-slate-400/25">
        Je Tag siehst du, wie viele Kollegen planen, ins Büro zu gehen.
      </p>
    </div>
  );
}
