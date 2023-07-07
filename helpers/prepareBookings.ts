import IBooking from "../typings/interfaces/IBooking";
import safeguardDate from "./safeguardDateAgainstTimezoneOffset";

const preparedBookings = (bookingsToBePrepared: IBooking[]): IBooking[] => {
  if (!Array.isArray(bookingsToBePrepared))
    throw new Error(
      "🚨 The argument of the array parameter containing the bookings to be prepared is not an array."
    );
  if (bookingsToBePrepared.length === 0)
    throw new Error("🚨 The array of bookings to be prepared is empty.");
  const preparedBookings = bookingsToBePrepared.map(
    ({ date, coworkerId, officeId }: IBooking) => {
      const safeDate = safeguardDate(date);
      return {
        date: safeDate,
        coworkerId,
        officeId,
      };
    }
  );
  return preparedBookings;
};

export default preparedBookings;
