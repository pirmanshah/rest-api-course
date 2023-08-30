const courseService = require('@services/courseService');
const catchAsync = require('@utils/catchAsync');
const showSimilarity = require('@utils/showSimilarity');

const viewController = (() => {
  const index = catchAsync(async (request, response) => {
    const { userId: id, name: nama } = request.query;
    const userId = id !== '' ? Number(id) : 107;
    const name = nama !== '' ? nama : 'Habib';

    const courseForCosine = await courseService.findAll(userId);
    const cosineResult = showSimilarity(courseForCosine);

    response.render('index', {
      data: cosineResult,
      name: name,
      userId: userId,
    });
  });

  return {
    index,
  };
})();

module.exports = viewController;
