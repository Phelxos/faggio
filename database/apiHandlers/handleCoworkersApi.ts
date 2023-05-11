import db from "../db";

export async function fetch() {
  const coworkers = await db("coworkers").select("*");
  return coworkers;
}
