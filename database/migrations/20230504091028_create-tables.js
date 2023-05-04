/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema
    .createTable("coworkers", function (table) {
      table.string("forename").notNullable();
      table.string("surname").notNullable();
      table.string("office").notNullable();
      table.string("imgSrc");
      table.string("birthdayDate");
      table.string("birthdayMonth");
      table.integer("employmentBeginning").notNullable();
      table.string("position").notNullable();
      table.json("projects");
      table.integer("coworkerId").notNullable();
      table.json("favorites");
      table.string("email").notNullable();
      table.string("phone").notNullable();
      table.string("messenger").notNullable();
    })
    .createTable("offices", function (table) {
      table.string("city").notNullable();
      table.integer("officeId").notNullable();
      table.string("district");
      table.string("street").notNullable();
      table.string("houseNumber").notNullable();
      table.integer("areaInSquareMeters");
      table.boolean("areDogsAllowed");
      table.integer("headcount");
      table.integer("workstations");
      table.text("description");
      table.string("imgSrc");
      table.string("intranetUrl");
    })
    .createTable("bookings", function (table) {
      table.increments("id").primary();
      table.date("date").notNullable();
      table.string("officeId").notNullable();
      table.integer("coworkerId").notNullable();
      table.foreign("officeId").references("officeId").inTable("offices");
      table.foreign("coworkerId").references("coworkerId").inTable("coworkers");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.down = function (knex) {
  return knex.schema
    .dropTable("bookings")
    .dropTable("coworkers")
    .dropTable("offices");
};
