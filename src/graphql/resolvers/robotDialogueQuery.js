const pool = require("../../db/pool");

const robotDialogueQuery = {
  robotDialogues: async () => {
    const result = await pool.query("SELECT * FROM robot_dialogues ORDER BY step_index ASC");
    return result.rows;
  },
};

module.exports = robotDialogueQuery;
