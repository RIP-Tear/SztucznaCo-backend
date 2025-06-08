const pool = require("../../db/pool");

const servicesQuery = {
  services: async () => {
    const result = await pool.query("SELECT * FROM services");

    return result.rows.map((service) => ({
      ...service,
      createdAt: service.createdat
        ? new Date(service.createdat).toISOString()
        : null,
    }));
  },
};

module.exports = servicesQuery;