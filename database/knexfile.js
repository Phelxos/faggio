module.exports = {
  client: "sqlite3",
  connection: {
    filename: "./database/faggio-db.sqlite",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
  useNullAsDefault: true,
};
