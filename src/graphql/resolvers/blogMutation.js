const pool = require("../../db/pool");
const { v4: uuidv4 } = require("uuid");

const ALLOWED_UPDATE_FIELDS = new Set([
  "author",
  "tags",
  "title",
  "text",
  "image",
  "public",
  "metaDescription",
]);

const blogMutation = {
  addBlog: async (_, args) => {
    const uuid = uuidv4();
    const createdAt = new Date().toISOString();

    const result = await pool.query(
      `INSERT INTO blog ("uuid","createdAt","author","views","tags","title","text","image","public","metaDescription")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       RETURNING *`,
      [
        uuid,
        createdAt,
        args.author,
        0,
        args.tags,
        args.title,
        args.text,
        args.image,
        args.public,
        args.metaDescription,
      ]
    );

    return result.rows[0];
  },

  updateBlog: async (_, args) => {
    const { uuid, ...fields } = args;

    // Nie pozwalamy aktualizować tych pól
    delete fields.views;
    delete fields.createdAt;

    const setClauses = [];
    const values = [];
    let index = 1;

    for (const [key, value] of Object.entries(fields)) {
      if (!ALLOWED_UPDATE_FIELDS.has(key)) continue;
      // Pomijamy pola celowo ustawione na undefined (np. brak zmiany)
      if (typeof value === "undefined") continue;

      // Cudzysłowy dla identyfikatorów (działa z camelCase jak "metaDescription")
      setClauses.push(`"${key}" = $${index}`);
      values.push(value);
      index++;
    }

    if (setClauses.length === 0) {
      throw new Error("No fields provided for update.");
    }

    const query = `
      UPDATE blog
      SET ${setClauses.join(", ")}
      WHERE "uuid" = $${index}
      RETURNING *;
    `;
    values.push(uuid);

    const result = await pool.query(query, values);
    return result.rows[0];
  },

  deleteBlog: async (_, { uuid }) => {
    await pool.query(`DELETE FROM blog WHERE "uuid" = $1`, [uuid]);
    return true;
  },

  incrementBlogViews: async (_, { uuid }) => {
    const result = await pool.query(
      `UPDATE blog
       SET "views" = "views" + 1
       WHERE "uuid" = $1
       RETURNING *;`,
      [uuid]
    );

    if (result.rows.length === 0) {
      throw new Error("Nie znaleziono posta o podanym UUID.");
    }

    return result.rows[0];
  },
};

module.exports = blogMutation;
