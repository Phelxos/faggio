"use client";

import { FC, useState } from "react";
import getLiteralDate from "../../../../../../helpers/getLiteralDate";
import useNextBooking from "../../../../../../hooks/useNextBooking";
import useNextWeekBookings from "../../../../../../hooks/useMyBookingsOfNextWeek";
import useAccount from "../../../../../../stores/SAccount";
import EmptyMessage from "./EmptyMessage";
import NextDay from "./NextDay";
import useToast from "../../../../../../stores/SToast";

const Body: FC = () => {
  const myId = useAccount((s) => s.coworkerId);
  const nextBooking = useNextBooking(myId);
  const nextDay = nextBooking ? getLiteralDate(nextBooking?.date) : null;
  const nextWeekBookingsNumber = useState(useNextWeekBookings(myId)?.length)[0];

  return (
    <div className="flex grow flex-col items-end justify-center leading-8">
      <div className="flex flex-col gap-3 p-6">
        {nextDay ? (
          <NextDay
            nextBooking={
              nextBooking as {
                date: Date;
                officeId: number;
              }
            }
            nextDay={nextDay}
          />
        ) : (
          <EmptyMessage />
        )}
      </div>
      {!!nextWeekBookingsNumber && (
        <>
          <hr className="w-[85%] border-sky-700" />
          <div className="flex flex-col gap-3 p-5">
            <p className="self-end text-3xl font-thin text-sky-500/50">
              Nächste Woche
            </p>
            <div className="text-sky-500">
              Nächste Woche hast du vor,{" "}
              <span className="inline-block rounded bg-sky-700 px-2 text-sky-300">
                {nextWeekBookingsNumber > 1 ? nextWeekBookingsNumber : "ein"}
              </span>{" "}
              Mal ins Büro zu kommen.
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
