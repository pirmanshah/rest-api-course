const createKnex = require('@config/createKnex');

const knex = createKnex();

const transactionService = (() => {
  const create = async (payload) => {
    await knex('transactions').insert(payload);
    const result = await knex.raw('SELECT LAST_INSERT_ID() as transactionId');

    return result[0][0].transactionId;
  };

  return {
    create,
  };
})();

module.exports = transactionService;
