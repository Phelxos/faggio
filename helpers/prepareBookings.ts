import IBooking from "../typings/interfaces/IBooking";
import safeguardDate from "./safeguardDateAgainstTimezoneOffset";

export default function preparedBookings(
  bookingsToBePrepared: IBooking[]
): IBooking[] {
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
}
