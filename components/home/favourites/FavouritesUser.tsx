import { getDay, getMonth } from "date-fns";
import React from "react";
import UserImage from "../../user/UserImage";
import displayEquivalent from "../../../helpers/displayEquivalent";
import useNextBooking from "../../../hooks/useNextBooking";
import { EOfficesEnglishToGerman } from "../../../typings/types/TOfficeCity";
import ICoworker from "../../../typings/interfaces/ICoworker";

export default function FavouritesUser({ coworker }: { coworker: ICoworker }) {
  const nextBooking = useNextBooking(coworker.coworkerId);
  return (
    <div
      className={`flex min-w-[104px] snap-center flex-col items-center rounded-lg bg-pink-500/50 shadow-lg ${
        !nextBooking && "opacity-50"
      }`}
    >
      <UserImage coworker={coworker} />
      {nextBooking ? (
        <>
          <div className="flex w-full grow flex-col items-center justify-between gap-2 px-6 pb-3 text-pink-100">
            <div>
              <span className="text-sm font-bold opacity-75">
                {getDay(nextBooking?.date)}.{" "}
              </span>
              <span className="text-xs opacity-50">
                {displayEquivalent(getMonth(nextBooking?.date), "month")}
              </span>
            </div>
            <span className="text-5xl font-thin tracking-widest opacity-75">
              {displayEquivalent(getDay(nextBooking?.date), "day")}
            </span>
          </div>
          {nextBooking?.office && (
            <div className="w-full rounded-b-lg bg-pink-900/50 py-2 text-center text-xs uppercase tracking-widest text-pink-300/50">
              {EOfficesEnglishToGerman[nextBooking.office]}
            </div>
          )}
        </>
      ) : (
        <span className="flex w-full grow flex-col items-center justify-center p-4 text-center text-xs italic text-pink-200/50">
          nichts geplant
        </span>
      )}
    </div>
  );
}
