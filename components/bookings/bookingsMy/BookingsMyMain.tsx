import React, { useContext, useState, useEffect } from "react";
import Icon from "../../icons/Icon";
import useBookings from "../../../stores/SBookings";
import IBooking from "../../../typings/interfaces/IBooking";
import { CBookings } from "../../contexts/CBookings";
import capitaliseFirstLetter from "../../../helpers/capitaliseFirstLetter";
import { getDate, getMonth, getYear } from "date-fns";
import displayEquivalent from "../../../helpers/displayEquivalent";
import { EOfficesEnglishToGerman } from "../../../typings/types/TOfficeCity";

export default function BookingsMyMain() {
  let bookings = useBookings((s) => s.bookings);
  const c = useContext(CBookings);
  let deleteBookings = useBookings((s) => s.deleteBookings);

  const handleDeleteButton = (toBeDeleted: IBooking[]) => {
    deleteBookings(toBeDeleted);
  };

  return (
    <div className="w-full grow divide-y-4 divide-emerald-900">
      {bookings.length > 0
        ? bookings
            .filter(
              (booking: IBooking) =>
                booking.office === c?.locallySelectedOfficeName
            )
            .map((booking: IBooking, i: number) => (
              <div
                key={i}
                className={`flex w-full justify-between ${
                  i % 2 === 0 ? "bg-slate-500/50" : "bg-slate-400/50"
                } px-6 py-4 last:rounded-b-lg`}
              >
                <div className="flex w-2/3 flex-col items-center gap-4">
                  <div className="flex w-full items-end gap-2">
                    <span className="text-4xl font-thin text-slate-300/75">
                      {getDate(new Date(booking.date))}.
                    </span>
                    <span
                      className={`${
                        displayEquivalent(
                          getMonth(new Date(booking.date)),
                          "month"
                        ).length <= 5
                          ? "text-3xl"
                          : "text-xl"
                      } text-slate-400/75`}
                    >
                      {displayEquivalent(
                        getMonth(new Date(booking.date)),
                        "month"
                      )}
                    </span>
                  </div>
                  <div className="grid w-full grid-cols-6">
                    <div className="col-span-5 flex w-fit items-center justify-between gap-2 rounded-xl bg-slate-800/25 p-2">
                      <Icon
                        icon="buildingOffice"
                        className="h-5 w-5 fill-slate-300/25"
                      />
                      <span className="text-xs uppercase text-slate-300/75">
                        {capitaliseFirstLetter(
                          EOfficesEnglishToGerman[booking.office]
                        )}
                      </span>
                    </div>
                    <span className="col-span-1 place-self-center rounded bg-slate-800/25 p-2 text-center text-xs text-slate-300/50">
                      {getYear(new Date(booking.date))}
                    </span>
                  </div>
                </div>
                <div className="flex grow flex-col items-end justify-center">
                  <button
                    className="rounded-full bg-rose-500/20 p-3 hover:bg-rose-700"
                    onClick={() => handleDeleteButton([booking])}
                  >
                    <Icon
                      icon="trash"
                      className="mx-0 h-5 w-5 fill-slate-400/50"
                    />
                  </button>
                </div>
              </div>
            ))
        : ""}
    </div>
  );
}
