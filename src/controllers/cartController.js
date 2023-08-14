const Jwt = require('jsonwebtoken');
const cartService = require('@services/cartService');
const catchAsync = require('@utils/catchAsync');

const cartController = (() => {
  const index = catchAsync(async (request, response) => {
    const authHeader = request.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    const user = Jwt.verify(token, process.env.SECRET);

    const carts = await cartService.findByUser(user?.id);

    response.json({
      status: 'success',
      data: {
        carts,
      },
    });
  });

  const create = catchAsync(async (request, response) => {
    const { courseId, userId } = request.body;

    await cartService.create({ courseId: Number(courseId), userId: Number(userId) });

    response.status(201).json({
      status: 'success',
      message: 'Add cart successfull',
    });
  });

  const deleted = catchAsync(async (request, response) => {
    const { cartId } = request.params;

    await cartService.deleteById(Number(cartId));

    response.json({
      status: 'success',
      message: 'Delete cart successfull',
    });
  });

  return {
    index,
    deleted,
    create,
  };
})();

module.exports = cartController;
