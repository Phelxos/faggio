import knex from "knex";
import config from "../knexfile";
import IBooking from "../typings/interfaces/IBooking";
import prepareDate from "../helpers/prepareDate";

const db = knex(config);

export async function addBooking({ date, coworkerId, officeId }: IBooking) {
  try {
    const preparedDate = prepareDate(date);
    const preparedBooking = { date: preparedDate, coworkerId, officeId };
    await db("bookings").insert(preparedBooking);
  } catch (e) {
    console.error(e);
  }
}
