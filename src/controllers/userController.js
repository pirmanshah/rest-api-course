const userService = require('@services/userService');

const userController = (() => {
  const index = async (request, response) => {
    const users = await userService.findAll();

    response.json({
      status: 'success',
      data: {
        users,
      },
    });
  };

  return {
    index,
  };
})();

module.exports = userController;
