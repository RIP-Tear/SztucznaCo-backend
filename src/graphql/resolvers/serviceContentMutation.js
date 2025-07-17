const pool = require("../../db/pool");
const { v4: uuidv4 } = require("uuid");

const serviceContentMutation = {
  addContentItem: async (_, args) => {
    const uuid = uuidv4();

    const result = await pool.query(
      `INSERT INTO service_content 
      (uuid, "uuidService", "contentTitle", "contentIcon", "contentIndex")
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *`,
      [
        uuid,
        args.uuidService,
        args.contentTitle,
        args.contentIcon,
        args.contentIndex,
      ]
    );

    return result.rows[0];
  },

  updateContentItem: async (_, args) => {
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
      UPDATE service_content SET ${setClauses.join(", ")} 
      WHERE uuid = $${index}
      RETURNING *`;

    values.push(uuid);

    const result = await pool.query(query, values);
    return result.rows[0];
  },

  deleteContentItem: async (_, { uuid }) => {
    await pool.query(`DELETE FROM service_content WHERE uuid = $1`, [uuid]);
    return true;
  },
};

module.exports = serviceContentMutation;
