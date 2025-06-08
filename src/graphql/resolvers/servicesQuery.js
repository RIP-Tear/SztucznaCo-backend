const pool = require("../../db/pool");

const servicesQuery = {
  services: async () => {
    const result = await pool.query("SELECT * FROM services");
    return result.rows;
  },
};

module.exports = servicesQuery;
