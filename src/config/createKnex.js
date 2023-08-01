const knex = require('knex');

function createKnex() {
  return knex({
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    pool: { min: 0, max: 7 },
  });
}

module.exports = createKnex;
