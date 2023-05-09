exports.up = function (knex) {
  return knex.schema.alterTable("bookings", (table) => {
    table.string("date").unique().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("bookings", (table) => {
    table.dropUnique("date");
  });
};
