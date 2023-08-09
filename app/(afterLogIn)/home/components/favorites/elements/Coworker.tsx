"use client";

import { getDate, getDay, getMonth } from "date-fns";
import { FC } from "react";
import Icon from "../../../../../components/icons/Icon";
import UserImage from "../../../../../components/user/UserImage";
import convertFromIdToOfficeName from "../../../../../../helpers/convertFromIdToOfficeName";
import displayEquivalent from "../../../../../../helpers/displayEquivalent/displayEquivalent";
import useNextBooking from "../../../../../../hooks/useNextBooking";
import TCoworkerId from "../../../../../../typings/types/TCoworkerId";
import convertDateToSpeakingName from "../../../../../../helpers/convertDateToSpeakingName";

const User: FC<{ coworkerId: TCoworkerId }> = ({ coworkerId }) => {
  const nextBooking = useNextBooking(coworkerId);
  nextBooking && getDay(nextBooking?.date);
  return (
    <div
      className={`relative flex min-w-[125px] snap-center flex-col items-center rounded-lg bg-pink-500/50 shadow-lg ${
        !nextBooking && "opacity-50"
      }`}
    >
      <div className="relative -top-4 scale-125">
        <UserImage coworkerId={coworkerId} />
      </div>
      {nextBooking ? (
        <>
          <div
            className={`${
              convertDateToSpeakingName(nextBooking?.date)
                ? "justify-center"
                : "justify-between"
            } flex w-full grow flex-col items-center gap-2 px-4 pb-3 text-pink-100`}
          >
            <>
              <div>
                <div>
                  <span className="text-sm font-bold opacity-75">
                    {getDate(nextBooking?.date)}.{" "}
                  </span>
                  <span className="text-xs opacity-50">
                    {displayEquivalent(getMonth(nextBooking?.date), "month")}
                  </span>
                </div>
              </div>
              <span className="text-5xl font-thin tracking-widest opacity-75">
                {displayEquivalent(getDay(nextBooking?.date), "day")}
              </span>
            </>
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
      {nextBooking?.date && convertDateToSpeakingName(nextBooking?.date) && (
        <span
          className={`${
            convertDateToSpeakingName(nextBooking.date) === "morgen" ||
            convertDateToSpeakingName(nextBooking.date) === "heute"
              ? "font-bold"
              : "font-thin"
          } absolute -right-3 top-11 inline-block hyphens-auto rounded bg-pink-200/75 px-3 py-1 text-center text-sm tracking-wide text-pink-800 opacity-95 drop-shadow-2xl`}
        >
          {(
            convertDateToSpeakingName(nextBooking.date as Date) as string
          ).toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default User;
