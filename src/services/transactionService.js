const createKnex = require('@config/createKnex');

const knex = createKnex();

const transactionService = (() => {
  const findByUserId = async (userId) => {
    const transactions = await knex('transactions')
      .select('transactions.*', 'transaction_status.name as status')
      .whereIn('transactions.id', function () {
        this.select('transactionId').from('enroll').where('id_user', userId);
      })
      .leftJoin('transaction_status', 'transactions.statusId', 'transaction_status.id')
      .orderBy('transactions.createdAt', 'desc');

    return transactions;
  };
  const create = async (payload) => {
    await knex('transactions').insert(payload);
    const result = await knex.raw('SELECT LAST_INSERT_ID() as transactionId');

    return result[0][0].transactionId;
  };

  return {
    create,
    findByUserId,
  };
})();

module.exports = transactionService;
