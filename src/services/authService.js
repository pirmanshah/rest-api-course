const createKnex = require('@config/createKnex');

const knex = createKnex();

const authService = (() => {
  const findByEmail = async (email) => {
    const user = knex('users').where('email', email).first();

    return user;
  };

  return {
    findByEmail,
  };
})();

module.exports = authService;
