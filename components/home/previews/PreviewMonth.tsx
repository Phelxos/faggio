import React, { useEffect, useState } from "react";
import Link from "next/link";
import mapCalendar from "../../../helpers/mapCalendar";
import useCalendar from "../../../stores/SCalendar";
import useOffice from "../../../stores/SOffices";
import useBookings from "../../../stores/SBookings";
import useAccount from "../../../stores/SAccount";
import displayEquivalent from "../../../helpers/displayEquivalent";
import getOccupancyLevel from "../../../helpers/getOccupancyLevel";
import IBooking from "../../../typings/interfaces/IBooking";

export default function PreviewMonth() {
  const globallySelectedOfficeId = useOffice((s) => s.globallySelectedOfficeId);
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const selectedCalWeek = useCalendar((s) => s.selectedCalWeek);
  const allBookings = useBookings((s) => s.bookings);
  const coworkerId = useAccount((s) => s.coworkerId);
  const [bookingsOther, setBookingsOther] = useState<IBooking[]>([]);
  const [displayedMonth, setDisplayedMonth]: any[] = useState(() => {
    return mapCalendar(selectedMonth, selectedYear);
  });
  const workstationCapacity = useOffice(
    (s) => s.globallySelectedOffice
  ).workstations;

  useEffect(() => {
    const bookingsFromOtherCoworkers = allBookings.filter(
      (booking) => booking.coworkerId !== coworkerId
    );
    setBookingsOther(bookingsFromOtherCoworkers);
  }, [allBookings, coworkerId]);

  return (
    <div>
      <p className="mb-3 text-4xl font-thin text-slate-400/75">
        Monatsübersicht
      </p>
      <div className="w-full shadow-md">
        <Link href="/bookings">
          <div className="flex w-full items-center justify-between rounded-t-lg bg-emerald-900/75 py-4 pl-6 pr-4">
            <span className="text-2xl font-extralight uppercase tracking-widest text-emerald-200">
              {displayEquivalent(selectedMonth, "month")}
            </span>
            <span className="rounded bg-emerald-700/50 px-4 py-2 tracking-widest text-emerald-400/75">
              {selectedYear}
            </span>
          </div>
        </Link>
        <div>
          {displayedMonth.map((week: any[], i: number) => {
            return (
              <div
                key={i}
                className={`${
                  i % 2 === 0
                    ? "bg-emerald-600/75 text-emerald-900"
                    : "bg-emerald-700/75 text-emerald-500"
                } flex w-full justify-around gap-6
                 p-3 ${
                   week[0].calWeek === selectedCalWeek &&
                   "border-y-2 border-emerald-200"
                 }`}
              >
                {week.map((weekday: any, i: number) => {
                  if (weekday.isNoDayOfMonth) {
                    return <div key={i} className="h-[30px] w-[30px]" />;
                  }
                  if (weekday.calWeek) {
                    return (
                      <div
                        key={i}
                        className={`flex h-[30px] w-[30px] flex-col items-center justify-center ${
                          weekday.calWeek === selectedCalWeek &&
                          "rounded-lg bg-emerald-300/75 text-emerald-800"
                        }`}
                      >
                        {weekday.calWeek}
                      </div>
                    );
                  }
                  if (!weekday.calWeek) {
                    return (
                      <div
                        key={i}
                        className={`h-[30px] w-[30px] rounded-full bg-emerald-200/${getOccupancyLevel(
                          weekday.date,
                          workstationCapacity as number,
                          bookingsOther,
                          globallySelectedOfficeId
                        )}`}
                      />
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
        <div className="h-[15px] w-full rounded-b-lg bg-emerald-900/75" />
      </div>
      <p className="mt-3 text-right text-xs font-semibold text-slate-400/25">
        Ein Punkt repräsentiert einen Tag. Je heller er leuchtet, desto mehr
        Kollegen planen, an jenem Tag ins Büro zu kommen.
      </p>
    </div>
  );
}
