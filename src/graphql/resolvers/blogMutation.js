const pool = require("../../db/pool");
const { v4: uuidv4 } = require("uuid");

const blogMutation = {
  addBlog: async (_, args) => {
    const uuid = uuidv4();
    const createdAt = new Date().toISOString();

    const result = await pool.query(
      `INSERT INTO blog (uuid, createdAt, author, views, tags, title, text, image, public)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [
        uuid,
        createdAt,
        args.author,
        args.views,
        JSON.stringify(args.tags),
        args.title,
        args.text,
        args.image,
        args.public
      ]
    );

    const blog = result.rows[0];

    return {
      ...blog,
      createdAt: blog.createdat ? new Date(blog.createdat).toISOString() : null,
    };
  }
};

module.exports = blogMutation;
