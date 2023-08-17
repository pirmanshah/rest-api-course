const bankService = require('@services/bankService');
const catchAsync = require('@utils/catchAsync');

const bankController = (() => {
  const index = catchAsync(async (request, response) => {
    const banks = await bankService.findAll();

    response.json({
      status: 'success',
      data: {
        banks,
      },
    });
  });

  return {
    index,
  };
})();

module.exports = bankController;
