const pool = require("../../db/pool");
const { v4: uuidv4 } = require("uuid");

const serviceProfitsMutation = {
  addProfitItem: async (_, args) => {
    const uuid = uuidv4();

    const result = await pool.query(
      `INSERT INTO service_profits 
      (uuid, "uuidService", "profitsTitle", "profitsDescription", "profitsIndex", "profitsButton", "profitsLink")
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [
        uuid,
        args.uuidService,
        args.profitsTitle,
        args.profitsDescription,
        args.profitsIndex,
        args.profitsButton,
        args.profitsLink,
      ]
    );

    return result.rows[0];
  },

  updateProfitItem: async (_, args) => {
    const { uuid, ...fields } = args;
    const setClauses = [];
    const values = [];
    let index = 1;

    for (const [key, value] of Object.entries(fields)) {
      setClauses.push(`"${key}" = $${index}`);
      values.push(value);
      index++;
    }

    if (setClauses.length === 0) {
      throw new Error("No fields provided for update.");
    }

    const query = `
      UPDATE service_profits SET ${setClauses.join(", ")} 
      WHERE uuid = $${index}
      RETURNING *`;

    values.push(uuid);

    const result = await pool.query(query, values);
    return result.rows[0];
  },

  deleteProfitItem: async (_, { uuid }) => {
    await pool.query(`DELETE FROM service_profits WHERE uuid = $1`, [uuid]);
    return true;
  },
};

module.exports = serviceProfitsMutation;
