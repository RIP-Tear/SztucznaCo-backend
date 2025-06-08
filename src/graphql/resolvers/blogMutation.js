const pool = require("../../db/pool");
const { v4: uuidv4 } = require("uuid");

const blogMutation = {
  addBlog: async (_, args) => {
    const uuid = uuidv4();
    const createdAt = new Date().toISOString();

    const result = await pool.query(
      `INSERT INTO blog ("uuid", "createdAt", author, views, tags, title, text, image, public)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        uuid,
        createdAt,
        args.author,
        args.views,
        args.tags,
        args.title,
        args.text,
        args.image,
        args.public,
      ]
    );

    return result.rows[0];
  },

  updateBlog: async (_, args) => {
    const { uuid, ...fields } = args;

    const setClauses = [];
    const values = [];
    let index = 1;

    for (const [key, value] of Object.entries(fields)) {
      setClauses.push(`${key} = $${index}`);
      values.push(value);
      index++;
    }

    if (setClauses.length === 0) {
      throw new Error("No fields provided for update.");
    }

    const query = `
      UPDATE blog SET ${setClauses.join(", ")} 
      WHERE uuid = $${index}
      RETURNING *`;

    values.push(uuid);

    const result = await pool.query(query, values);
    return result.rows[0];
  },
  deleteBlog: async (_, { uuid }) => {
    await pool.query(`DELETE FROM blog WHERE uuid = $1`, [uuid]);
    return true;
  },
};

module.exports = blogMutation;
