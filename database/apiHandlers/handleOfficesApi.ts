import db from "../db";

export async function fetch() {
  const offices = await db("offices").select("*");
  return offices;
}
