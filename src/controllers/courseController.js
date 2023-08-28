const courseService = require('@services/courseService');
const catchAsync = require('@utils/catchAsync');

const courseController = (() => {
  const index = catchAsync(async (request, response) => {
    const { userId = null } = request.query;

    const courses = await courseService.findAll(Number(userId));

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

  const getByUserId = catchAsync(async (request, response) => {
    const { userId } = request.query;

    const courses = await courseService.findByUserId(userId);

    response.json({
      status: 'success',
      data: {
        courses,
      },
    });
  });

  const getDetail = catchAsync(async (request, response) => {
    const { courseId } = request.query;

    const course = await courseService.findDetail(courseId);

    response.json({
      status: 'success',
      data: {
        course,
      },
    });
  });

  return {
    index,
    getById,
    getDetail,
    getByTitle,
    getPopulars,
    getByUserId,
  };
})();

module.exports = courseController;
