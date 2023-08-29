const createKnex = require('@config/createKnex');

const knex = createKnex();

const interestService = (() => {
  const findAll = async () => {
    const interests = knex.select('id', 'nama', 'email', 'role_id', 'status_id').from('interests');

    return interests;
  };

  const create = async (payload) => {
    const { topicId, levelId, userId, categoryId } = payload;

    await knex('interests').insert({
      topicId: topicId,
      levelId: levelId,
      userId: userId,
      categoryId: categoryId,
    });
  };

  return {
    findAll,
    create,
  };
})();

module.exports = interestService;
