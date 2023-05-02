module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./faggio-db.sqlite",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
  useNullAsDefault: true,
};
