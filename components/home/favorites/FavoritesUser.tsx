import { getDay, getMonth } from "date-fns";
import React from "react";
import UserImage from "../../user/UserImage";
import displayEquivalent from "../../../helpers/displayEquivalent";
import useNextBooking from "../../../hooks/useNextBooking";
import ICoworker from "../../../typings/interfaces/ICoworker";
import Icon from "../../icons/Icon";
import convertFromIdToOfficeName from "../../../helpers/convertFromIdToOfficeName";

export default function FavoritesUser({ coworker }: { coworker: ICoworker }) {
  const nextBooking = useNextBooking(coworker.coworkerId);
  return (
    <div
      className={`flex min-w-[104px] snap-center flex-col items-center rounded-lg bg-pink-500/50 shadow-lg ${
        !nextBooking && "opacity-50"
      }`}
    >
      <div className="relative -top-4">
        <UserImage coworker={coworker} />
      </div>
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
          {nextBooking?.officeId && (
            <div className="w-full rounded-b-lg bg-pink-900/50 py-2 text-center text-xs uppercase tracking-widest text-pink-300/50">
              {convertFromIdToOfficeName(nextBooking.officeId)}
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center px-4 pb-6 pt-1">
          <Icon
            icon="xMark"
            className="h-14 w-14 rounded-full fill-pink-500/50 p-2"
          />
          <span className="text-center text-xs font-bold italic tracking-widest text-pink-500">
            bislang keine Buchung
          </span>
        </div>
      )}
    </div>
  );
}
