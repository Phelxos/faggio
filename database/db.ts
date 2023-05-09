import knex from "knex";
import config from "../knexfile";
import IBooking from "../typings/interfaces/IBooking";
import prepareDate from "../helpers/prepareDate";
import checkForDuplicates from "../helpers/checkForDuplicates";

const db = knex(config);

export async function addBooking(
  bookings: IBooking[]
): Promise<IBooking[] | undefined> {
  try {
    const preparedBookings = bookings.map(
      ({ date, coworkerId, officeId }: IBooking) => {
        const preparedDate = prepareDate(date);
        return {
          date: preparedDate,
          coworkerId,
          officeId,
        };
      }
    );

    const bookingsAreUnique = await checkForDuplicates(
      "bookings",
      preparedBookings
    );

    if (bookingsAreUnique) {
      return await db("bookings").insert(preparedBookings);
    } else {
      throw new Error("The booking to be inserted already exists.");
    }
  } catch (e) {
    console.error(e);
  }
}

export async function getAllBookings(): Promise<IBooking[] | undefined> {
  try {
    const result = await db("bookings");
    return result;
  } catch (e) {
    console.error(e);
  }
}
