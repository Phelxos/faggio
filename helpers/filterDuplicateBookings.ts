import IBooking from "../typings/interfaces/IBooking";

const filterDuplicateBookings = (bookings: IBooking[]): IBooking[] => {
  const seenBookings: { [key: string]: boolean } = {};
  const uniqueBookings: IBooking[] = [];

  for (const booking of bookings) {
    const bookingKey = `${booking.date}-${booking.coworkerId}-${booking.officeId}`;

    if (!seenBookings[bookingKey]) {
      seenBookings[bookingKey] = true;
      uniqueBookings.push(booking);
    }
  }

  return uniqueBookings;
};

export default filterDuplicateBookings;
