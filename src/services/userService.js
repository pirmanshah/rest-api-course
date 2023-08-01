const createKnex = require('@config/createKnex');

const knex = createKnex();

const userService = (() => {
  const findAll = async () => {
    const users = knex.select('id', 'nama', 'email', 'role_id', 'status_id').from('users');

    return users;
  };

  return {
    findAll,
  };
})();

module.exports = userService;
