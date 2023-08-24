import mockCoworkers from "../mocks/coworkers";

exports.seed = async function (knex) {
  await knex("coworkers").del();
  await knex("coworkers").insert(mockCoworkers);
};
