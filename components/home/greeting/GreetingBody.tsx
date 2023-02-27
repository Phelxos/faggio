import React, { useState } from "react";
import getLiteralDate from "../../../helpers/getLiteralDate";
import useBookings from "../../../stores/SBookings";
import useNextBooking from "../../../hooks/useNextBooking";
import useNextWeekBookings from "../../../hooks/useNextWeekBookings";
import Link from "next/link";

export default function GreetingBody() {
  const nextBooking = useNextBooking();
  const nextDay = getLiteralDate(nextBooking);
  const nextWeekBookingsNumber = useState(useNextWeekBookings()?.length)[0];
  return (
    <div className="flex flex-col items-center leading-8">
      <div className="flex flex-col gap-3 p-6">
        {nextDay ? (
          <>
            <p className="self-end text-4xl font-thin text-sky-500/50">
              Nächstes Mal
            </p>
            <div className="text-sky-500">
              Du planst, das nächste Mal {!nextDay?.includes(" ") && "am"}{" "}
              <div className="inline-block rounded bg-sky-700 py-1 px-2 text-sky-300">
                {nextDay}
              </div>{" "}
              ins Büro zu gehen.
            </div>
          </>
        ) : (
          <>
            <p className="text-sky-500/75">
              Bislang planst du <strong>nicht</strong>, ins Büro zu kommen.
            </p>
            <Link
              href={"/bookings"}
              className="self-end rounded border-2 border-sky-800/75 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-700 to-sky-400 py-2 px-3 text-sky-900 shadow-lg"
            >
              <button className="font-mono text-xs uppercase tracking-wider">
                Bürotage buchen
              </button>
            </Link>
          </>
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
              <span className="inline-block rounded bg-sky-700 py-1 px-2 text-sky-300">
                {nextWeekBookingsNumber > 1 ? nextWeekBookingsNumber : "ein"}
              </span>{" "}
              Mal ins Büro zu kommen.
            </div>
          </div>
        </>
      )}
    </div>
  );
}
