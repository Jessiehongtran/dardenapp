// Update with your config settings.
require('dotenv').config({path: 'path_to_env_file'});

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database_file.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: { directory: "./data/seeds" }
  },
  ssl: true

};

