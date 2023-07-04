"use client";

import { FC, useContext, useEffect, useState } from "react";
import { CBookings } from "../../../../Context";
import Spinner from "../../../../../../../components/spinners/Spinner";
import UserImage from "../../../../../../../components/user/UserImage";
import compareDatesSafely from "../../../../../../../helpers/compareDatesSafely";
import useAccount from "../../../../../../../stores/SAccount";
import useBookings from "../../../../../../../stores/SBookings";
import useCoworkers from "../../../../../../../stores/SCoworkers";
import IBooking from "../../../../../../../typings/interfaces/IBooking";
import ICoworker from "../../../../../../../typings/interfaces/ICoworker";
import EmtpyStateMessage from "./EmptyStateMessage";

interface Props {
  i: number;
  date: Date | string;
}

const Row: FC<Props> = ({ i, date }) => {
  const c = useContext(CBookings);

  const myId = useAccount((s) => s.coworkerId);
  const bookings = useBookings((s) => s.bookings);
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);

  const [filteredBookings, setFilteredBookings] = useState<IBooking[]>([]);
  const [hasSomeBooking, setHasSomeBooking] = useState<boolean>(false);

  useEffect(() => {
    const filteredBookings = bookings.filter(
      (b) =>
        b.officeId === c?.locallySelectedOfficeId &&
        compareDatesSafely(date, b.date)
    );
    setFilteredBookings(filteredBookings);
  }, [coworkers, bookings, c?.locallySelectedOfficeId, date]);

  useEffect(() => {
    if (
      filteredBookings.some(
        (b) => compareDatesSafely(date, b.date) && b.coworkerId !== myId
      )
    ) {
      setHasSomeBooking(true);
    } else {
      setHasSomeBooking(false);
    }
  }, [filteredBookings, date, myId]);

  return (
    <div
      className={`relative col-span-6 flex h-[90px] w-full items-center overflow-x-auto px-3 py-2 shadow-inner ${
        i % 2 === 0 ? "bg-slate-500/50" : "bg-slate-400/50"
      } ${hasSomeBooking ? "gap-5" : "justify-center gap-1 opacity-30"}`}
    >
      {isLoading ? (
        <Spinner />
      ) : hasSomeBooking ? (
        <>
          {(coworkers as ICoworker[])
            ?.filter((coworker: ICoworker) =>
              filteredBookings.some(
                (booking) => booking.coworkerId === coworker.coworkerId
              )
            )
            .map(({ coworkerId }, i: number) => {
              return (
                <div key={i} className="min-w-[65px]">
                  <UserImage coworkerId={coworkerId} />
                </div>
              );
            })}
        </>
      ) : (
        <EmtpyStateMessage darker={i % 2 === 0} />
      )}
    </div>
  );
};

export default Row;
