const createKnex = require('@config/createKnex');

const knex = createKnex();

const bankService = (() => {
  const findAll = async () => {
    const banks = knex.select('*').from('banks');

    return banks;
  };

  return {
    findAll,
  };
})();

module.exports = bankService;
