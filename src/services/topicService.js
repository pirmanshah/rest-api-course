const createKnex = require('@config/createKnex');

const knex = createKnex();

const topicService = (() => {
  const findAll = async () => {
    const topics = knex.select('id', 'keterangan').from('topic');

    return topics;
  };

  return {
    findAll,
  };
})();

module.exports = topicService;
