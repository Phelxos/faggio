import knex from "knex";
import config from "../knexfile";
import IBooking from "../typings/interfaces/IBooking";
import prepareDate from "../helpers/prepareDate";

const db = knex(config);

/**
 * Checks if an entry already exists in a table
 * @param entryToBeChecked Object representing the entry to be inserted but needs to be checked for duplicates before
 * @returns Boolean indicating whether a duplicate has NOT been found
 */
export async function checkForDuplicates(
  table: string,
  entryToBeChecked: Object
) {
  try {
    const result = await db(table).where(entryToBeChecked);
    console.log("🚀 ~ file: db.ts:19 ~ result:", result);
    console.log("🚀 ~ file: db.ts:20 ~ result's length:", result.length > 0);
    return result.length === 0; // True if NO duplicates have been found
  } catch (e) {
    console.error(
      e,
      "I have a detected an entry matching your object you want to insert."
    );
  }
}

export async function addBooking({ date, coworkerId, officeId }: IBooking) {
  try {
    const preparedDate = prepareDate(date);
    const preparedBooking = { date: preparedDate, coworkerId, officeId };
    if (await checkForDuplicates("bookings", preparedBooking)) {
      await db("bookings").insert(preparedBooking);
    } else {
      throw new Error("The booking you want to insert already exists.");
    }
  } catch (e) {
    console.error(e);
  }
}
