const createKnex = require('@config/createKnex');

const knex = createKnex();

const categoryService = (() => {
  const findAll = async () => {
    const categories = knex.select('id', 'keterangan').from('kategori');

    return categories;
  };

  return {
    findAll,
  };
})();

module.exports = categoryService;
