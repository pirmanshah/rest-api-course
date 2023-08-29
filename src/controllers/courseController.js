const catchAsync = require('@utils/catchAsync');
const getSimilarity = require('@utils/similarity');
const cartService = require('@services/cartService');
const courseService = require('@services/courseService');

const courseController = (() => {
  const index = catchAsync(async (request, response) => {
    const { id: userId } = request.user;

    const courseForCosine = await courseService.findAll(userId);
    const courseByUser = await courseService.findAllByUser(userId);
    const cosineResult = getSimilarity(courseForCosine);

    const cosineSimilarityMap = new Map();
    cosineResult.forEach((item) => {
      cosineSimilarityMap.set(item.course, item);
    });

    // Gabungkan data course details dengan cosine similarity
    const combinedData = courseByUser.map((course) => ({
      course: course.id,
      similarity: cosineSimilarityMap.has(course.id) ? cosineSimilarityMap.get(course.id).similarity : 0,
      label: cosineSimilarityMap.has(course.id) ? cosineSimilarityMap.get(course.id).label : 'Not Recomended',
      ...course,
    }));

    // Pisahkan kursus yang direkomendasikan dan yang tidak direkomendasikan
    const recommendedCourses = combinedData.filter((item) => item.label !== 'Not Recomended').sort((a, b) => b.similarity - a.similarity);

    const notRecommendedCourses = combinedData.filter((item) => item.label === 'Not Recomended');

    response.json({
      status: 'success',
      data: {
        recommendedCourses,
        notRecommendedCourses,
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

  const getDetailCourse = catchAsync(async (request, response) => {
    const { courseId } = request.query;
    const { id: userId } = request.user;

    const defaultCourse = await courseService.findById(Number(courseId));
    const courses = await courseService.findByUserIdAll(userId);
    const carts = await cartService.findByUser(userId);

    const inCart = carts.some((cartItem) => cartItem.courseId === defaultCourse.id);
    const alreadyEnroll = courses.some((item) => item.id === defaultCourse.id);
    const alreadyInCourse = courses.some((item) => item.id === defaultCourse.id && item.statusId === 1);

    const course = {
      ...defaultCourse,
      inCart,
      alreadyEnroll,
      alreadyInCourse,
    };

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

  const getTest = catchAsync(async (request, response) => {
    const courses = await courseService.test();

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
    const { id: userId } = request.user;

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
    getTest,
    getDetailCourse,
  };
})();

module.exports = courseController;
