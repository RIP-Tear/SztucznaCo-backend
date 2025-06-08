const pool = require("../../db/pool");
const { v4: uuidv4 } = require("uuid");

const servicesMutation = {
  addService: async (_, args) => {
    const uuid = uuidv4();
    const createdAt = new Date().toISOString();

    const result = await pool.query(
      `INSERT INTO services 
        (uuid, createdAt, title, description, public, content, contentIcon, profitsTitle, profitsDescription, tooltip)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [
        uuid,
        createdAt,
        args.title,
        args.description,
        args.public,
        JSON.stringify(args.content),
        JSON.stringify(args.contentIcon),
        JSON.stringify(args.profitsTitle),
        JSON.stringify(args.profitsDescription),
        args.tooltip
      ]
    );

    const service = result.rows[0];

    return {
      ...service,
      createdAt: new Date(service.createdat).toISOString()
    };
  },
};

module.exports = servicesMutation;
