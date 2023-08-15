"use client";

import { getDate, getDay, isSameDay, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import safeguardDate from "../../../../../../helpers/safeguardDateAgainstTimezoneOffset";
import useWeekCurrent from "../../../../../../hooks/useWeekCurrent";
import useWeekNext from "../../../../../../hooks/useWeekNext";
import useAccount from "../../../../../../stores/SAccount";
import useBookings from "../../../../../../stores/SBookings";
import useCalendar from "../../../../../../stores/SCalendar";
import useOffice from "../../../../../../stores/SOffices";
import CalendarWeek from "./elements/CalendarWeek";
import WeekDay from "./elements/Weekday";

export default function PreviewWeek() {
  const IdOfLoggedInUser = useAccount((s) => s.coworkerId);
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
    let weekdayToday;
    if (typeof today === "string") {
      const todayDate = parseISO(today);
      weekdayToday = getDate(todayDate);
    } else {
      weekdayToday = getDate(today);
    }
    if (weekdayToday === 0 || weekdayToday > 3) {
      setIsShowingNextWeekBookings(true);
    }
  }, [today]);

  useEffect(() => {
    let newWeekBookingsOtherCount;
    if (isShowingNextWeekBookings) {
      newWeekBookingsOtherCount = nextWeek.map(({ date }) => {
        const safeDate = safeguardDate(date);
        const count = bookings.filter(({ date, officeId, coworkerId }) => {
          return (
            isSameDay(new Date(date), safeDate) &&
            globallySelectedOfficeId === officeId &&
            IdOfLoggedInUser !== coworkerId
          );
        }).length;
        return { count, date };
      });
      setCountOfOtherBookingsInSelectedWeek(newWeekBookingsOtherCount);
    } else {
      newWeekBookingsOtherCount = currentWeek.map(({ date }) => {
        const safeDate = safeguardDate(date);
        const count = bookings.filter(({ date, officeId, coworkerId }) => {
          return (
            isSameDay(new Date(date), safeDate) &&
            globallySelectedOfficeId === officeId &&
            IdOfLoggedInUser !== coworkerId
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
    <div className="col-span-full h-fit sm:col-start-3 sm:col-end-13 md:col-span-6 md:col-start-7 md:row-start-1 md:row-end-2 lg:col-end-11">
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
                <WeekDay
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
