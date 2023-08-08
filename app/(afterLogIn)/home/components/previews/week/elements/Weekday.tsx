"use client";

import { useEffect, useState } from "react";
import Icon from "../../../../../../components/icons/Icon";
import compareDatesSafely from "../../../../../../../helpers/compareDatesSafely";

export default function WeekDay({
  i,
  weekday,
  dateNumber,
  date,
  countsOfOtherBookings,
}: {
  i: number;
  weekday: string;
  dateNumber: number;
  date: Date;
  countsOfOtherBookings: { count: number; date: Date }[];
}) {
  const [todaysCount, setTodaysCount] = useState<number>(0);
  const [areThereOtherBookingsForToday, setAreThereOtherBookingsForToday] =
    useState<boolean>(true);

  useEffect(() => {
    setTodaysCount(
      countsOfOtherBookings.find(({ date: dateToFind }) =>
        compareDatesSafely(dateToFind, date)
      )?.count!
    );
  }, [countsOfOtherBookings, date]);

  useEffect(() => {
    setAreThereOtherBookingsForToday(todaysCount > 0);
  }, [todaysCount]);

  return (
    <div key={i} className={`flex h-full grow flex-col`}>
      <div
        className={`flex h-3/5 w-full flex-col justify-between border-r-4 bg-emerald-900/75 p-2 last:border-r-4 ${
          i % 2
            ? "border-emerald-800/75 text-emerald-500/60"
            : "border-emerald-700/75 text-emerald-400/60"
        }`}
      >
        <span className="self-start text-xl font-thin">{weekday}</span>
        <span className="self-end text-sm font-bold">{dateNumber}</span>
      </div>
      <div
        className={`flex h-2/5 w-full flex-col items-center justify-center px-2 py-3 text-2xl ${
          i % 2
            ? "bg-emerald-800 text-emerald-500"
            : "bg-emerald-700 text-emerald-400"
        }`}
      >
        {areThereOtherBookingsForToday ? (
          todaysCount
        ) : (
          <Icon icon="xMark" className="h-6 w-6 fill-emerald-500/50" />
        )}
      </div>
    </div>
  );
}
