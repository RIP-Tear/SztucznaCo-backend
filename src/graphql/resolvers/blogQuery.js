const pool = require("../../db/pool");

const blogQuery = {
  blogs: async () => {
    const result = await pool.query("SELECT * FROM blog");
    return result.rows.map((blog) => ({
      ...blog,
      createdAt: blog.createdAt ? new Date(blog.createdAt).toISOString() : null,
    }));
  },
};

module.exports = blogQuery;
