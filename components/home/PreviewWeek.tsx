import React, { useEffect, useState, useContext } from "react";
import useCalendar from "../../stores/SCalendar";
import useWeekNext from "../../hooks/useWeekNext";
import useWeekCurrent from "../../hooks/useWeekCurrent";
import { getDate, getDay } from "date-fns";
import useBookings from "../../stores/SBookings";
import { isSameDay } from "date-fns";
import useOffice from "../../stores/SOffices";
import getOccupancyLevel from "../../helpers/getOccupancyLevel";

export default function PreviewWeek() {
  const globallySelectedOffice = useOffice(
    (s) => s.globallySelectedOffice
  ).city;
  const workstationCapacity = useOffice(
    (s) => s.globallySelectedOffice
  ).workstations;
  const calWeek = useCalendar((s) => s.currentCalWeek);
  const today = useCalendar((s) => s.today);
  const bookingsOther = useBookings((s) => s.bookingsOther);
  const nextWeek = useWeekNext();
  const currentWeek = useWeekCurrent();
  const [isShowingNextWeekBookings, setIsShowingNextWeekBookings] =
    useState<boolean>(false);
  const [weekBookingsOtherCount, setWeekBookingsOtherCount] = useState<
    { count: number; date: Date }[]
  >([]);

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
        const safeDate = new Date(date);
        const count = bookingsOther.filter(({ date, office }) => {
          return (
            isSameDay(new Date(date), safeDate) &&
            globallySelectedOffice === office
          );
        }).length;
        return { count, date };
      });
      setWeekBookingsOtherCount(newWeekBookingsOtherCount);
    } else {
      newWeekBookingsOtherCount = currentWeek.map(({ date }) => {
        const safeDate = new Date(date);
        const count = bookingsOther.filter(({ date, office }) => {
          return (
            isSameDay(new Date(date), safeDate) &&
            globallySelectedOffice === office
          );
        }).length;
        return { count, date };
      });
      setWeekBookingsOtherCount(newWeekBookingsOtherCount);
    }
  }, [bookingsOther, isShowingNextWeekBookings]);

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
      <p></p>
      <div className="flex rounded bg-emerald-900/75 p-1 text-emerald-200/75 shadow-md">
        <div className="flex w-1/5 flex-col items-center justify-between border-r-2 border-emerald-300/50 p-3">
          <span className="self-start text-2xl font-thin text-emerald-300/60">
            KW
          </span>
          <span className="self-end text-xl font-bold text-emerald-300/50">
            {isShowingNextWeekBookings ? calWeek + 1 : calWeek}
          </span>
        </div>
        <div className="flex grow items-center">
          {(isShowingNextWeekBookings ? nextWeek : currentWeek).map(
            ({ dateNumber, name, date }, i) => {
              return (
                <div key={i} className="flex grow flex-col">
                  <div
                    className={`flex w-full flex-col items-center border-r-4 bg-emerald-900/75 p-2 last:border-r-4 ${
                      i % 2
                        ? "border-emerald-800/75 text-emerald-500/60"
                        : "border-emerald-700/75 text-emerald-400/60"
                    }`}
                  >
                    <span className="self-start text-xl font-thin">{name}</span>
                    <span className="self-end text-sm font-bold">
                      {dateNumber}
                    </span>
                  </div>
                  <div
                    className={`flex w-full flex-col items-center p-2 text-2xl ${
                      i % 2
                        ? `bg-emerald-800/75 text-emerald-500/${getOccupancyLevel(
                            date,
                            workstationCapacity,
                            bookingsOther,
                            globallySelectedOffice
                          )}`
                        : `bg-emerald-700/75 text-emerald-400/${getOccupancyLevel(
                            date,
                            workstationCapacity,
                            bookingsOther,
                            globallySelectedOffice
                          )}`
                    }`}
                  >
                    {weekBookingsOtherCount.find(({ date: dateToFind }) =>
                      isSameDay(new Date(dateToFind), new Date(date))
                    )?.count ?? 0}
                  </div>
                </div>
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
