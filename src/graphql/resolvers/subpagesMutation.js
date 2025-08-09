// subpagesMutation.js
const pool = require("../../db/pool");
const { v4: uuidv4 } = require("uuid");

const subpagesMutation = {
  addSubpage: async (_, args) => {
    const uuid = uuidv4();
    const createdAt = new Date().toISOString();
    const isPublic = args.public ?? false;

    const result = await pool.query(
      `INSERT INTO subpages 
        ("uuid","createdAt","title","text","image","metaDescription","video","buttonName","buttonLink","public")
       VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
       RETURNING *`,
      [
        uuid,
        createdAt,
        args.title,
        args.text ?? null,
        args.image ?? null,
        args.metaDescription ?? null,
        args.video ?? null,
        args.buttonName ?? null,
        args.buttonLink ?? null,
        isPublic,
      ]
    );

    return result.rows[0];
  },

  updateSubpage: async (_, args) => {
    const { uuid, ...fields } = args;

    delete fields.createdAt;
    delete fields.uuid;
    delete fields.id;

    const setClauses = [];
    const values = [];
    let i = 1;

    for (const [key, value] of Object.entries(fields)) {
      if (typeof value === "undefined") continue;
      setClauses.push(`"${key}" = $${i}`);
      values.push(value);
      i++;
    }

    if (setClauses.length === 0) {
      throw new Error("No fields provided for update.");
    }

    const query = `
      UPDATE subpages
      SET ${setClauses.join(", ")}
      WHERE "uuid" = $${i}
      RETURNING *;
    `;
    values.push(uuid);

    const result = await pool.query(query, values);
    return result.rows[0] || null;
  },

  deleteSubpage: async (_, { uuid }) => {
    const result = await pool.query(`DELETE FROM subpages WHERE "uuid" = $1`, [
      uuid,
    ]);
    return result.rowCount > 0;
  },
};

module.exports = subpagesMutation;
