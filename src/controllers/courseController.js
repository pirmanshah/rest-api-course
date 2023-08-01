const courseService = require('@services/courseService');

const courseController = (() => {
  const index = async (request, response) => {
    const courses = await courseService.findAll();

    response.json({
      status: 'success',
      data: {
        courses,
      },
    });
  };

  const getById = async (request, response) => {
    const { courseId } = request.params;
    const course = await courseService.findById(courseId);

    response.json({
      status: 'success',
      data: {
        course,
      },
    });
  };

  const getPopulars = async (request, response) => {
    const courses = await courseService.findPopulars();

    response.json({
      status: 'success',
      data: {
        courses,
      },
    });
  };

  const getByTitle = async (request, response) => {
    const { title } = request.query;

    const courses = await courseService.findByTitle(title);

    response.json({
      status: 'success',
      data: {
        courses,
      },
    });
  };

  return {
    index,
    getById,
    getByTitle,
    getPopulars,
  };
})();

module.exports = courseController;
