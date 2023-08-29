const bcrypt = require('bcryptjs');
const createKnex = require('@config/createKnex');

const knex = createKnex();

const userService = (() => {
  const findAll = async () => {
    const users = knex.select('id', 'nama', 'email', 'role_id', 'status_id').from('users');

    return users;
  };

  const create = async (payload) => {
    const { name, email, password } = payload;
    const hashPassord = await bcrypt.hash(password, 12);

    await knex('users').insert({
      nama: name,
      email: email,
      password: hashPassord,
      role_id: 2,
      status_id: 1,
    });
    const result = await knex.raw('SELECT LAST_INSERT_ID() as userId');

    return result[0][0].userId;
  };

  return {
    findAll,
    create,
  };
})();

module.exports = userService;
