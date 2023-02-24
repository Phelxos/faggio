import React, { useState } from "react";
import getLiteralDate from "../../../helpers/getLiteralDate";
import useBookings from "../../../stores/SBookings";
import useNextBooking from "../../../hooks/useNextBooking";
import useNextWeekBookings from "../../../hooks/useNextWeekBookings";

export default function GreetingBody() {
  const nextBooking = useNextBooking();
  const nextDay = getLiteralDate(nextBooking);
  const nextWeekBookingsNumber = useState(useNextWeekBookings()?.length)[0];
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-3 p-5">
        <div className=" text-sky-500">
          Du planst, das nächste Mal {!nextDay?.includes(" ") && "am"}{" "}
          <div className="inline-block rounded bg-sky-700 py-1 px-2 text-sky-300">
            {nextDay}
          </div>{" "}
          ins Büro zu gehen.
        </div>
        <p className="self-end text-4xl font-thin text-sky-500/50">
          Nächstes Mal
        </p>
      </div>
      <hr className="w-[85%] border-sky-700" />
      <div className="flex flex-col gap-3 p-5">
        <div className="text-sky-500">
          {nextWeekBookingsNumber ? (
            <>
              Nächste Woche hast du vor,{" "}
              <span className="inline-block rounded bg-sky-700 py-1 px-2 text-sky-300">
                {nextWeekBookingsNumber > 1 ? nextWeekBookingsNumber : "ein"}
              </span>{" "}
              Mal ins Büro zu kommen.
            </>
          ) : (
            <>Für die nächste Woche hast du noch keine Bürotage gebucht.</>
          )}
        </div>
        <p className="self-end text-3xl font-thin text-sky-500/50">
          Nächste Woche
        </p>
      </div>
    </div>
  );
}
