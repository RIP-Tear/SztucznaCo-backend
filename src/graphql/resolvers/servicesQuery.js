const pool = require("../../db/pool");

const servicesQuery = {
  services: async () => {
    const result = await pool.query("SELECT * FROM services");
    return result.rows.map((service) => ({
      ...service,
      createdAt: service.createdAt
        ? new Date(service.createdAt).toISOString()
        : null,
    }));
  },
};

module.exports = servicesQuery;
