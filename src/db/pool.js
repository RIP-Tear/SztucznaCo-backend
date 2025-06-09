const { Pool, types } = require("pg");

types.setTypeParser(1114, (str) => str);
types.setTypeParser(1184, (str) => str);

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

module.exports = pool;
