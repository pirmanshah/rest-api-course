const userService = require('@services/userService');
const interestService = require('@services/interestService');
const catchAsync = require('@utils/catchAsync');

const userController = (() => {
  const index = catchAsync(async (request, response) => {
    const users = await userService.findAll();

    response.json({
      status: 'success',
      data: {
        users,
      },
    });
  });

  const create = catchAsync(async (request, response) => {
    const payload = request.body;

    const userId = await userService.create(payload);
    await interestService.create({ ...payload, userId: userId });

    response.status(201).json({
      status: 'success',
      message: 'Register success!',
    });
  });

  return {
    index,
    create,
  };
})();

module.exports = userController;
