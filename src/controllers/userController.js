const userService = require('@services/userService');
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

    await userService.create(payload);

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
