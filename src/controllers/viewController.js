const courseService = require('@services/courseService');
const catchAsync = require('@utils/catchAsync');
const showSimilarity = require('@utils/showSimilarity');

const viewController = (() => {
  const index = catchAsync(async (request, response) => {
    const courseForCosine = await courseService.findAll(58);
    const cosineResult = showSimilarity(courseForCosine);

    response.render('index', {
      data: cosineResult,
    });
  });

  return {
    index,
  };
})();

module.exports = viewController;
