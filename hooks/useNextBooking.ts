import useBookings from "../stores/SBookings";

export default function useNextBooking(): Date | undefined {
  const today = new Date().getTime();
  const bookings = useBookings((s) => s.bookings);
  const nextBooking = bookings.find(
    ({ date }) => new Date(date).getTime() > today
  );

  return nextBooking ? new Date(nextBooking!.date) : undefined;
}
