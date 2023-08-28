const createKnex = require('@config/createKnex');

const knex = createKnex();

const levelService = (() => {
  const findAll = async () => {
    const data = knex.select('id', 'keterangan').from('level');

    return data;
  };

  return {
    findAll,
  };
})();

module.exports = levelService;
