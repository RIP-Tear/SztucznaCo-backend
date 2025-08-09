const pool = require("../../db/pool");

const subpagesQuery = {
  subpages: async () => {
    const result = await pool.query(`SELECT * FROM subpages`);
    return result.rows;
  },
};

module.exports = subpagesQuery;
