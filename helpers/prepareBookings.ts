import IBooking from "../typings/interfaces/IBooking";
import prepareDate from "./prepareDate";

export default function preparedBookings(
  bookingsToBePrepared: IBooking[]
): IBooking[] {
  const preparedBookings = bookingsToBePrepared.map(
    ({ date, coworkerId, officeId }: IBooking) => {
      const preparedDate = prepareDate(date);
      return {
        date: preparedDate,
        coworkerId,
        officeId,
      };
    }
  );
  return preparedBookings;
}
