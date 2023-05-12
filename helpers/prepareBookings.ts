import IBooking from "../typings/interfaces/IBooking";
import prepareDateAsString from "./prepareDateAsString";

export default function preparedBookings(
  bookingsToBePrepared: IBooking[]
): IBooking[] {
  const preparedBookings = bookingsToBePrepared.map(
    ({ date, coworkerId, officeId }: IBooking) => {
      const preparedDate = prepareDateAsString(date);
      return {
        date: preparedDate,
        coworkerId,
        officeId,
      };
    }
  );
  return preparedBookings;
}
