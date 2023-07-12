"use client";

import { getDate, getMonth } from "date-fns";
import { FC } from "react";
import Icon from "../../../../../../components/icons/Icon";
import convertFromIdToOfficeName from "../../../../../../helpers/convertFromIdToOfficeName";
import displayEquivalent from "../../../../../../helpers/displayEquivalent/displayEquivalent";
import useBookings from "../../../../../../stores/SBookings";
import IBooking from "../../../../../../typings/interfaces/IBooking";

interface Props {
  filteredBookings: IBooking[];
}

const FilteredBookings: FC<Props> = ({ filteredBookings }) => {
  const deleteBookings = useBookings((s) => s.deleteBookings);

  const handleDeleteButton = (toBeDeleted: IBooking[]) => {
    deleteBookings(toBeDeleted);
  };

  return (
    <>
      {filteredBookings.map((booking: IBooking, i: number) => (
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
                  typeof displayEquivalent(
                    getMonth(new Date(booking.date)),
                    "month"
                  ) === "string" &&
                  (
                    displayEquivalent(
                      getMonth(new Date(booking.date)),
                      "month"
                    ) as string
                  ).length <= 5
                    ? "text-3xl"
                    : "text-xl"
                } text-slate-400/75`}
              >
                {displayEquivalent(getMonth(new Date(booking.date)), "month")}
              </span>
            </div>
            <div className="grid w-full grid-cols-6">
              <div className="col-span-5 flex w-fit items-center justify-between gap-2 rounded-xl bg-slate-800/25 px-2 py-1">
                <Icon
                  icon="buildingOffice"
                  className="h-4 w-4 fill-slate-300/25"
                />
                <span className="text-xs uppercase text-slate-300/50">
                  {convertFromIdToOfficeName(booking.officeId)}
                </span>
              </div>
            </div>
          </div>
          <div className="flex grow flex-col items-end justify-center">
            <button
              className="rounded-full bg-rose-500/20 p-3 hover:bg-rose-700"
              onClick={() => handleDeleteButton([booking])}
            >
              <Icon icon="trash" className="mx-0 h-5 w-5 fill-slate-400/50" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default FilteredBookings;
