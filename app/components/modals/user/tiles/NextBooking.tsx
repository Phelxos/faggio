"use client";

import capitaliseFirstLetter from "../../../../../helpers/capitaliseFirstLetter";
import Icon from "../../../icons/Icon";
import useNextBooking from "../../../../../hooks/useNextBooking";
import convertFromIdToOfficeName from "../../../../../helpers/convertFromIdToOfficeName";
import { FC } from "react";

const NextBooking: FC<{ id: number | undefined }> = ({ id = 1000 }) => {
  const nextBooking = useNextBooking(id);

  return (
    <div
      className={`col-span-4 flex w-full flex-col items-center rounded bg-pink-700/50 p-4 ${
        !nextBooking && "opacity-50"
      }`}
    >
      <p className="mb-4 w-full font-extralight tracking-wider text-pink-300/75">
        Nächster Bürobesuch
      </p>
      <p
        className={`flex w-full flex-col items-center gap-1 text-right text-xs text-pink-300/75 ${
          !nextBooking && "italic"
        }`}
      >
        {nextBooking ? (
          <>
            <span className="text-lg">
              {nextBooking?.date.toLocaleDateString("de-DE", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
            </span>
            <span className="self-end font-light tracking-widest">
              in{" "}
              <span className="font-bold">
                {capitaliseFirstLetter(
                  convertFromIdToOfficeName(nextBooking.officeId) || ""
                )}
              </span>
            </span>
          </>
        ) : (
          <>
            <Icon
              icon="xMark"
              className="h-14 w-14 rounded-full fill-pink-500/75 p-2"
            />
            <span className="font-semibold tracking-widest">
              bislang nichts geplant
            </span>
          </>
        )}
      </p>
    </div>
  );
};

export default NextBooking;
