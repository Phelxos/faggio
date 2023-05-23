import React, { useContext, useEffect, useState } from "react";
import prepareDateAsString from "../../../../helpers/prepareDateAsString";
import useAccount from "../../../../stores/SAccount";
import useBookings from "../../../../stores/SBookings";
import useCoworkers from "../../../../stores/SCoworkers";
import IBooking from "../../../../typings/interfaces/IBooking";
import ICoworker from "../../../../typings/interfaces/ICoworker";
import { CBookings } from "../../../contexts/CBookings";
import Spinner from "../../../spinners/Spinner";
import UserImage from "../../../user/UserImage";
import EmtpyStateMessage from "./BookingsOtherMainEmptyStateMessage";

export default function BookingsOtherMainRow({
  i,
  date,
}: {
  i: number;
  date: Date | string;
}) {
  const c = useContext(CBookings);

  const myId = useAccount((s) => s.coworkerId);
  const bookings = useBookings((s) => s.bookings);
  const coworkers = useCoworkers((s) => s.coworkerListWithPhotos);
  const isLoading = useCoworkers((s) => s.isLoading);

  const [filteredBookings, setFilteredBookings] = useState<IBooking[]>([]);
  const [hasSomeBooking, setHasSomeBooking] = useState<boolean>(false);

  useEffect(() => {
    const filteredBookings = bookings.filter(
      (booking) =>
        booking.officeId === c?.locallySelectedOfficeId &&
        prepareDateAsString(booking.date) === prepareDateAsString(date)
    );
    setFilteredBookings(filteredBookings);
  }, [coworkers, bookings, c?.locallySelectedOfficeId, date]);

  useEffect(() => {
    if (
      filteredBookings.some(
        (booking) =>
          prepareDateAsString(booking.date) === prepareDateAsString(date) &&
          booking.coworkerId !== myId
      )
    ) {
      setHasSomeBooking(true);
    } else {
      setHasSomeBooking(false);
    }
  }, [filteredBookings, date, myId]);

  return (
    <div
      className={`relative col-span-6 flex h-[90px] items-center overflow-scroll px-3 py-2 shadow-inner ${
        i % 2 === 0 ? "bg-slate-500/50" : "bg-slate-400/50"
      } ${hasSomeBooking ? "gap-4" : "justify-center gap-1 opacity-30"}`}
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
            .map((coworker: ICoworker, i: number) => {
              return (
                <div key={i}>
                  <UserImage coworker={coworker} />
                </div>
              );
            })}
        </>
      ) : (
        <EmtpyStateMessage darker={i % 2 === 0} />
      )}
    </div>
  );
}
