import mockBookings from "../mocks/bookings";

exports.seed = async function (knex) {
  await knex("bookings").del();
  await knex("bookings").insert(mockBookings);
};
