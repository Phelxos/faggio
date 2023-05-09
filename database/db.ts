import knex from "knex";
import config from "../knexfile";
import IBooking from "../typings/interfaces/IBooking";
import checkForDuplicates from "../helpers/checkForDuplicates";
import prepareBookings from "../helpers/prepareBookings";
import QueryBuilder from "knex";

const db = knex(config);

export async function getAllBookings(): Promise<IBooking[] | undefined> {
  try {
    const result = await db("bookings").select(
      "date",
      "coworkerId",
      "officeId"
    );
    return result;
  } catch (e) {
    console.error(e);
  }
}

export async function addBooking(
  bookingsToBeAdded: IBooking[]
): Promise<IBooking[] | undefined> {
  try {
    const preparedBookings = prepareBookings(bookingsToBeAdded);

    const bookingsAreUnique = await checkForDuplicates(
      "bookings",
      preparedBookings
    );

    if (bookingsAreUnique) {
      await db("bookings").insert(preparedBookings);
      const updatedBookings = await getAllBookings();
      return updatedBookings;
    } else {
      throw new Error("🚧 | One of bookings to be inserted already exists.");
    }
  } catch (e) {
    console.error(e);
  }
}

export async function deleteBookings(bookingsToBeDeleted: IBooking[]) {
  try {
    const preparedBookings = prepareBookings(bookingsToBeDeleted);

    const promises = preparedBookings.map((booking) => {
      return db("bookings")
        .where({
          date: booking.date,
          coworkerId: booking.coworkerId,
          officeId: booking.officeId,
        })
        .del();
    });

    await Promise.all(promises);
    const updatedBookings = await getAllBookings();
    return updatedBookings;
  } catch (e) {
    console.error(e);
  }
}
