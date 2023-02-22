import IBooking from "../typings/interfaces/IBooking";

export default function getOccupancyLevel(
  date: any,
  workstationCapacity: number,
  bookings: IBooking[]
) {
  const bookingsNumber = bookings.filter(({ date: bookingDate }) => {
    return new Date(bookingDate).getTime() === date.getTime();
  }).length;
  const occupancyRate = Math.round(
    (bookingsNumber / workstationCapacity) * 100
  );
  if (occupancyRate < 2) return 10;
  if (occupancyRate < 5) return 40;
  if (occupancyRate < 10) return 75;
  else return 90;
}
