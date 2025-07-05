const pool = require("../../db/pool");

const robotDialogueMutation = {
  addRobotDialogue: async (_, { step_index, speaker, text }) => {
    const result = await pool.query(
      `INSERT INTO robot_dialogues (step_index, speaker, text)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [step_index, speaker, text]
    );
    return result.rows[0];
  },

  updateRobotDialogue: async (_, { id, ...fields }) => {
    const setClauses = [];
    const values = [];
    let index = 1;

    for (const [key, value] of Object.entries(fields)) {
      if (value !== undefined) {
        setClauses.push(`${key} = $${index}`);
        values.push(value);
        index++;
      }
    }

    if (setClauses.length === 0) {
      throw new Error("No fields provided for update.");
    }

    const query = `
      UPDATE robot_dialogues
      SET ${setClauses.join(", ")}
      WHERE id = $${index}
      RETURNING *`;

    values.push(id);

    const result = await pool.query(query, values);
    return result.rows[0];
  },
  deleteRobotDialogue: async (_, { id }) => {
    const result = await pool.query(
      `DELETE FROM robot_dialogues WHERE id = $1 RETURNING *`,
      [id]
    );

    if (result.rowCount === 0) {
      throw new Error(`Dialog line with id ${id} not found.`);
    }

    return true;
  },
};

module.exports = robotDialogueMutation;
