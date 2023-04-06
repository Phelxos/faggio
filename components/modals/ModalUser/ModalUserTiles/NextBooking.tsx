import React from "react";
import capitaliseFirstLetter from "../../../../helpers/capitaliseFirstLetter";
import { EOfficesEnglishToGerman } from "../../../../typings/types/TOfficeCity";
import Icon from "../../../icons/Icon";
import useNextBooking from "../../../../hooks/useNextBooking";

export default function NextBooking({ id = 1000 }: { id: number | undefined }) {
  const nextBooking = useNextBooking(id);

  return (
    <div
      className={`col-span-4 flex w-full flex-col items-center rounded bg-pink-700/50 p-4 ${
        !nextBooking && "opacity-50"
      }`}
    >
      <p className="mb-4 w-full font-thin tracking-wider text-pink-300/75">
        Nächster Bürobesuch
      </p>
      <p
        className={`w-full text-right text-xs text-pink-300/75 ${
          nextBooking ? "font-bold" : "italic"
        }`}
      >
        {nextBooking ? (
          <>
            <span>
              {nextBooking?.date.toLocaleDateString("de-DE", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
            </span>
            <br />
            <span className="tracking-widest">
              in{" "}
              {capitaliseFirstLetter(
                EOfficesEnglishToGerman[nextBooking?.office]
              )}
            </span>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <Icon
              icon="xMark"
              className="h-14 w-14 rounded-full fill-pink-500/75 p-2"
            />
            <span className="font-semibold tracking-widest">
              bislang nichts geplant
            </span>
          </div>
        )}
      </p>
    </div>
  );
}
