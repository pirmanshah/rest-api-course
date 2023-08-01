const courseService = require('@services/courseService');
const catchAsync = require('@utils/catchAsync');

const courseController = (() => {
  const index = catchAsync(async (request, response) => {
    const courses = await courseService.findAll();

    response.json({
      status: 'success',
      data: {
        courses,
      },
    });
  });

  const getById = catchAsync(async (request, response) => {
    const { courseId } = request.params;
    const course = await courseService.findById(courseId);

    response.json({
      status: 'success',
      data: {
        course,
      },
    });
  });

  const getPopulars = catchAsync(async (request, response) => {
    const courses = await courseService.findPopulars();

    response.json({
      status: 'success',
      data: {
        courses,
      },
    });
  });

  const getByTitle = catchAsync(async (request, response) => {
    const { title } = request.query;

    const courses = await courseService.findByTitle(title);

    response.json({
      status: 'success',
      data: {
        courses,
      },
    });
  });

  return {
    index,
    getById,
    getByTitle,
    getPopulars,
  };
})();

module.exports = courseController;
