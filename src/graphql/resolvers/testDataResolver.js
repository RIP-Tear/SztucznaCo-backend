const pool = require("../../db/pool");

const testDataResolver = {
  Query: {
    testData: async () => {
      const result = await pool.query("SELECT * FROM test_table");
      return result.rows;
    }
  },
  Mutation: {
    addTestData: async (_, args) => {
      const result = await pool.query(
        "INSERT INTO test_table (name) VALUES ($1) RETURNING *",
        [args.name]
      );
      return result.rows[0];
    }
  }
};

module.exports = testDataResolver;
