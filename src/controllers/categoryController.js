const categoryService = require('@services/categoryService');
const catchAsync = require('@utils/catchAsync');

const categoryController = (() => {
  const index = catchAsync(async (request, response) => {
    const data = await categoryService.findAll();
    const categories = data?.map(({ id, keterangan }) => ({ id: id, label: keterangan, value: id }));

    response.json({
      status: 'success',
      data: {
        categories,
      },
    });
  });

  return {
    index,
  };
})();

module.exports = categoryController;
