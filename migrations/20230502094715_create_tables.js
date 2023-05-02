/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema
    .createTable("bookings", function (table) {
      table.increments("id").primary();
      table.date("date").notNullable();
      table.string("office").notNullable();
      table
        .number("coworkerId")
        .notNullable()
        .references("coworkerId")
        .inTable("coworkers");
      table.timestamps(true, true);
    })
    .createTable("coworkers", function (table) {
      table.string("forename").notNullable();
      table.string("surname").notNullable();
      table.string("office").notNullable();
      table.string("imgSrc");
      table.string("birthdayDate");
      table.string("birthdayMonth");
      table.number("employmentBeginning").notNullable();
      table.string("position").notNullable();
      table.json("projects");
      table.number("coworkerId").notNullable();
      table.json("favorites");
      table.string("email").notNullable();
      table.string("phone").notNullable();
      table.string("messenger").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema.dropTable("bookings");
};
