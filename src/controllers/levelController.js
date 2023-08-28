const levelService = require('@services/levelService');
const catchAsync = require('@utils/catchAsync');

const levelController = (() => {
  const index = catchAsync(async (request, response) => {
    const data = await levelService.findAll();

    const levels = data?.map(({ id, keterangan }) => ({ id: id, label: keterangan, value: id }));

    response.json({
      status: 'success',
      data: {
        levels,
      },
    });
  });

  return {
    index,
  };
})();

module.exports = levelController;
