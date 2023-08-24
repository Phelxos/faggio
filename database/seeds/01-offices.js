import mockOffices from "../mocks/offices";

exports.seed = async function (knex) {
  await knex("offices").del();
  await knex("offices").insert(mockOffices);
};
