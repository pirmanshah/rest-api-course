const topicService = require('@services/topicService');
const catchAsync = require('@utils/catchAsync');

const topicController = (() => {
  const index = catchAsync(async (request, response) => {
    const data = await topicService.findAll();

    const topics = data?.map(({ id, keterangan }) => ({ id: id, label: keterangan, value: id }));

    response.json({
      status: 'success',
      data: {
        topics,
      },
    });
  });

  return {
    index,
  };
})();

module.exports = topicController;
