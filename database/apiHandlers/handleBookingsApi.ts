import db from "../db";
import IBooking from "../../typings/interfaces/IBooking";
import checkForDuplicates from "../../helpers/checkForDuplicates";
import prepareBookings from "../../helpers/prepareBookings";

export async function fetch(): Promise<IBooking[] | undefined> {
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

export async function enter(
  bookingsToBeEntered: IBooking[]
): Promise<IBooking[] | undefined> {
  try {
    const preparedBookings = prepareBookings(bookingsToBeEntered);

    const bookingsAreUnique = await checkForDuplicates(
      "bookings",
      preparedBookings
    );

    if (bookingsAreUnique) {
      await db("bookings").insert(preparedBookings);
      const updatedBookings = await fetch();
      return updatedBookings;
    } else {
      throw new Error("🚨 One of bookings to be inserted already exists.");
    }
  } catch (e) {
    console.error(e);
  }
}

export async function remove(bookingsToBeRemoved: IBooking[]) {
  try {
    const preparedBookings = prepareBookings(bookingsToBeRemoved);
    const promises = preparedBookings?.map((booking) => {
      return db("bookings")
        .where({
          date: booking.date,
          coworkerId: booking.coworkerId,
          officeId: booking.officeId,
        })
        .del();
    });

    await Promise.all(promises);
    const updatedBookings = await fetch();
    return updatedBookings;
  } catch (e) {
    console.error(e);
  }
}
