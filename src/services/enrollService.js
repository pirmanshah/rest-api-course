const createKnex = require('@config/createKnex');

const knex = createKnex();

const enrollService = (() => {
  const create = async (payload) => {
    await knex('enroll').insert(payload);
  };

  return {
    create,
  };
})();

module.exports = enrollService;
