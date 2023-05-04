module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./database/faggio-db.sqlite",
  },
  migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
  useNullAsDefault: true,
};
