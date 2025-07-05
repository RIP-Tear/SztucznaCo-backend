const pool = require("../../db/pool");
const { v4: uuidv4 } = require("uuid");

const servicesMutation = {
  addService: async (_, args) => {
    const uuid = uuidv4();
    const createdAt = new Date().toISOString();

    const result = await pool.query(
      `INSERT INTO services 
    (uuid, "createdAt", title, description, public, content, "contentIcon", "profitsTitle", "profitsDescription", tooltip, "linkOrder")
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
   RETURNING *`,
      [
        uuid,
        createdAt,
        args.title,
        args.description,
        args.public,
        args.content,
        args.contentIcon,
        args.profitsTitle,
        args.profitsDescription,
        args.tooltip,
        args.linkOrder,
      ]
    );

    return result.rows[0];
  },

  updateService: async (_, args) => {
    const { uuid, ...fields } = args;

    const setClauses = [];
    const values = [];
    let index = 1;

    const columnMap = {
      contentIcon: '"contentIcon"',
      profitsTitle: '"profitsTitle"',
      profitsDescription: '"profitsDescription"',
      createdAt: '"createdAt"',
      linkOrder: '"linkOrder"',
    };

    for (const [key, value] of Object.entries(fields)) {
      const columnName = columnMap[key] || key;
      setClauses.push(`${columnName} = $${index}`);
      values.push(value);
      index++;
    }

    if (setClauses.length === 0) {
      throw new Error("No fields provided for update.");
    }

    const query = `
      UPDATE services SET ${setClauses.join(", ")} 
      WHERE uuid = $${index}
      RETURNING *`;

    values.push(uuid);

    const result = await pool.query(query, values);
    return result.rows[0];
  },
  deleteService: async (_, { uuid }) => {
    await pool.query(`DELETE FROM services WHERE uuid = $1`, [uuid]);
    return true;
  },
};

module.exports = servicesMutation;
