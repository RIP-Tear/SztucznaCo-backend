const pool = require("../../db/pool");

const serviceContentQuery = {
  serviceContent: async () => {
    const result = await pool.query(
      "SELECT * FROM service_content ORDER BY contentIndex ASC"
    );
    return result.rows;
  },
};

module.exports = serviceContentQuery;
