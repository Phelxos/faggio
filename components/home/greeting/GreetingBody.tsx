import Link from "next/link";
import React, { useState } from "react";
import capitaliseFirstLetter from "../../../helpers/capitaliseFirstLetter";
import convertFromIdToOfficeName from "../../../helpers/convertFromIdToOfficeName";
import getLiteralDate from "../../../helpers/getLiteralDate";
import useNextBooking from "../../../hooks/useNextBooking";
import useNextWeekBookings from "../../../hooks/useNextWeekBookingsMy";
import useAccount from "../../../stores/SAccount";
import Icon from "../../icons/Icon";

export default function GreetingBody() {
  const myId = useAccount((s) => s.coworkerId);
  const nextBooking = useNextBooking(myId);
  const nextDay = getLiteralDate(nextBooking?.date);
  const nextWeekBookingsNumber = useState(useNextWeekBookings(myId)?.length)[0];
  const weekdaysGerman = [
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
  ];

  return (
    <div className="flex flex-col items-center leading-8">
      <div className="flex flex-col gap-3 p-6">
        {nextDay ? (
          <>
            <p className="self-end text-4xl font-thin text-sky-500/50">
              Nächstes Mal
            </p>
            <div className="leading-10 text-sky-500">
              Du planst,
              {weekdaysGerman?.includes(nextDay) && " am"}{" "}
              <span className="inline-block rounded bg-sky-700 px-2 text-sky-300">
                {nextDay}
              </span>{" "}
              ins{" "}
              <div className="my-2 inline-flex items-baseline gap-1 rounded bg-sky-700 px-2 text-sky-300">
                <Icon
                  icon="buildingOffice"
                  className="m-0 h-4 w-4 self-center opacity-50"
                />
                <Link href={"/offices"}>
                  {`${capitaliseFirstLetter(
                    convertFromIdToOfficeName(nextBooking!.officeId)!
                  )}er`}
                </Link>
              </div>{" "}
              Büro zu gehen.
            </div>
          </>
        ) : (
          <>
            <p className="text-sky-500/75">
              Bislang planst du <strong>nicht</strong>, ins Büro zu kommen.
            </p>
            <Link
              href={"/bookings"}
              className="self-end rounded-xl border-2 border-sky-800/75 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-700 to-sky-400 px-3 py-2 text-sky-900 shadow-lg"
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
