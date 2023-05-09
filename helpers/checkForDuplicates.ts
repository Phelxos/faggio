import knex from "knex";
import config from "../knexfile";

const db = knex(config);

/**
 * Check if an entry already exists in a table
 * @param toBeChecked Array of objects representing the entries to be inserted but need to be checked for duplicates before
 * @returns Boolean indicating whether duplicates have NOT been found
 */
export default async function checkForDuplicates(
  table: string,
  toBeChecked: Object[]
) {
  try {
    for (const entry of toBeChecked) {
      const result = await db(table).where(entry);
      if (result.length) {
        return false;
      }
    }

    return true; // No duplicates found
  } catch (e) {
    console.error(
      e,
      `An error has occurred while checking for duplicates in the table '${table}'.`
    );
  }
}
