import { useState } from "react";
import getLiteralDate from "../../../../../../helpers/getLiteralDate";
import useNextBooking from "../../../../../../hooks/useNextBooking";
import useNextWeekBookings from "../../../../../../hooks/useNextWeekBookingsMy";
import useAccount from "../../../../../../stores/SAccount";
import EmptyMessage from "./EmptyMessage";
import NextDay from "./NextDay";

export default function Body() {
  const myId = useAccount((s) => s.coworkerId);
  const nextBooking = useNextBooking(myId);
  const nextDay = getLiteralDate(nextBooking?.date);
  const nextWeekBookingsNumber = useState(useNextWeekBookings(myId)?.length)[0];

  return (
    <div className="flex flex-col items-center leading-8">
      <div className="flex flex-col gap-3 p-6">
        {nextDay ? (
          <NextDay nextBooking={nextBooking} nextDay={nextDay} />
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
}
