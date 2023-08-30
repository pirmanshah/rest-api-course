const createKnex = require('@config/createKnex');

const knex = createKnex();

const interestService = (() => {
  const findAll = async () => {
    const interests = knex.select('id', 'nama', 'email', 'role_id', 'status_id').from('interests');

    return interests;
  };

  const create = async (payload) => {
    const { topic, level, userId, category } = payload;

    await knex('interests').insert({
      topicId: topic,
      levelId: level,
      userId: userId,
      categoryId: category,
    });
  };

  return {
    findAll,
    create,
  };
})();

module.exports = interestService;
