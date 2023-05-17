import React, { useContext, useEffect, useState } from "react";
import useAccount from "../../../stores/SAccount";
import useBookings from "../../../stores/SBookings";
import IBooking from "../../../typings/interfaces/IBooking";
import { CBookings } from "../../contexts/CBookings";
import FilteredBookings from "./BookingsMyFilteredBookings";
import EmptyStateMessage from "./BookingsMyMainEmptyState";

export default function BookingsMyMain() {
  const c = useContext(CBookings);

  const coworkerId = useAccount((s) => s.coworkerId);
  const bookings = useBookings((s) => s.bookings);

  const [filteredBookings, setFilteredBookings] = useState<IBooking[]>([]);

  useEffect(() => {
    const filteredBookings = bookings.filter(
      (booking: IBooking) =>
        booking.officeId === c?.locallySelectedOfficeId &&
        booking.coworkerId === coworkerId
    );
    setFilteredBookings(filteredBookings);
  }, [bookings, c?.locallySelectedOfficeId, coworkerId]);

  return (
    <div className="h-[400px] w-full grow divide-y-4 divide-emerald-900 overflow-scroll">
      {filteredBookings.length > 0 ? (
        <FilteredBookings filteredBookings={filteredBookings} />
      ) : (
        <EmptyStateMessage />
      )}
    </div>
  );
}
