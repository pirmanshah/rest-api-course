const createKnex = require('@config/createKnex');

const knex = createKnex();

const cartService = (() => {
  const findByUser = async (userId) => {
    const carts = await knex
      .select('carts.id', 'carts.courseId', 'course.judul', 'course.harga')
      .from('carts')
      .join('course', 'carts.courseId', 'course.id')
      .where('carts.userId', userId);

    return carts;
  };

  const create = async ({ courseId, userId }) => {
    const existingCart = await knex('carts').where({ courseId: courseId, userId: userId }).first();

    // Jika data sudah ada, beritahu user
    if (existingCart) {
      throw new Error('User already has this course in the cart.');
    }

    await knex('carts').insert({ courseId: courseId, userId: userId });
  };

  const deleteById = async (cartId) => {
    await knex('carts').where('carts.id', cartId).del();
  };

  const deletedMany = async (carts) => {
    const deleteConditions = carts.map((cart) => ({
      courseId: cart.id_course,
      userId: cart.id_user,
    }));

    await knex('carts')
      .where((builder) => {
        deleteConditions.forEach((condition) => {
          builder.orWhere(condition);
        });
      })
      .del();
  };

  return {
    findByUser,
    deleteById,
    create,
    deletedMany,
  };
})();

module.exports = cartService;
