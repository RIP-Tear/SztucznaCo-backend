const pool = require("../../db/pool");

const serviceProfitsQuery = {
  serviceProfits: async () => {
    const result = await pool.query(
      "SELECT * FROM service_profits"
    );
    return result.rows;
  },
};

module.exports = serviceProfitsQuery;
