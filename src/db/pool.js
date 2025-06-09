const { Pool, types } = require("pg");

types.setTypeParser(1114, (str) => str);
types.setTypeParser(1184, (str) => str);

const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
