import React, { useEffect, useState } from "react";
import mapCalendar from "../../../../../../helpers/mapCalendar";
import getOccupancyLevel from "../../../../../../hooks/useOccupancyLevel";
import useAccount from "../../../../../../stores/SAccount";
import useBookings from "../../../../../../stores/SBookings";
import useCalendar from "../../../../../../stores/SCalendar";
import useOffice from "../../../../../../stores/SOffices";
import IBooking from "../../../../../../typings/interfaces/IBooking";

export default function Rows() {
  const selectedMonth = useCalendar((s) => s.selectedMonth);
  const selectedYear = useCalendar((s) => s.selectedYear);
  const selectedCalWeek = useCalendar((s) => s.selectedCalWeek);
  const allBookings = useBookings((s) => s.bookings);
  const coworkerId = useAccount((s) => s.coworkerId);
  const [_1, setBookingsOther] = useState<IBooking[]>([]);
  const [displayedMonth, _2]: any[] = useState(() => {
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
                const opacity = `opacity-${getOccupancyLevel(
                  weekday.date,
                  workstationCapacity as number
                )}`;
                return (
                  <div
                    key={i}
                    className={`h-[30px] w-[30px] rounded-full bg-emerald-200 ${opacity}`}
                  />
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
}
