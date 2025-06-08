const pool = require("../../db/pool");

const blogQuery = {
  blogs: async () => {
    const result = await pool.query("SELECT * FROM blog");
    return result.rows;
  },
};

module.exports = blogQuery;
