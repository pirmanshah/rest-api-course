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

  return {
    index,
  };
})();

module.exports = userController;
