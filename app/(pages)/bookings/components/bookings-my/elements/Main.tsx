import { FC, useContext, useEffect, useState } from "react";
import useAccount from "../../../../../../stores/SAccount";
import useBookings from "../../../../../../stores/SBookings";
import IBooking from "../../../../../../typings/interfaces/IBooking";
import { CBookings } from "../../../Context";
import FilteredBookings from "./FilteredBookings";
import EmptyStateMessage from "./EmptyStateMessage";

const Main: FC = () => {
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
    <div className="max-h-[400px] w-full grow divide-y-4 divide-emerald-900 overflow-scroll">
      {filteredBookings.length > 0 ? (
        <FilteredBookings filteredBookings={filteredBookings} />
      ) : (
        <EmptyStateMessage />
      )}
    </div>
  );
};

export default Main;
