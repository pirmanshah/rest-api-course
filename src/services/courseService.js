const createKnex = require('@config/createKnex');

const knex = createKnex();

const courseService = (() => {
  const findAll = async () => {
    const courses = await knex.select('*').from('course');

    return courses;
  };

  const findById = async (courseId) => {
    const course = await knex.select('*').from('course').where('id', courseId);

    return course;
  };

  const findByUserId = async (userId) => {
    const course = await knex
      .select('course.*')
      .from('course')
      .leftJoin('enroll', 'enroll.id_course', '=', 'course.id')
      .where('enroll.id_user', userId);

    return course;
  };

  const findByTitle = async (title) => {
    const courses = await knex.select('*').from('course').whereRaw('LOWER(judul) LIKE ?', `%${title.toLowerCase()}%`);

    return courses;
  };

  const findPopulars = async () => {
    const popularCourses = await knex('course')
      .join('enroll', 'enroll.id_course', '=', 'course.id')
      .select('course.*', 'enroll.id AS enroll_id', 'enroll.id_user', 'enroll.status', 'enroll.tanggal_pembelian');

    const coursesWithEnrolls = [];
    popularCourses.forEach((course) => {
      const existingCourse = coursesWithEnrolls.find((courseWithEnroll) => courseWithEnroll.id === course.id);
      if (existingCourse) {
        existingCourse.enrolls.push({
          id: course.enroll_id,
          id_user: course.id_user,
          status: course.status,
          tanggal_pembelian: course.tanggal_pembelian,
        });
      } else {
        const newCourse = {
          ...course,
          enrolls: [
            {
              id: course.enroll_id,
              id_user: course.id_user,
              status: course.status,
              tanggal_pembelian: course.tanggal_pembelian,
            },
          ],
        };
        coursesWithEnrolls.push(newCourse);
      }
    });

    // Urutkan hasil berdasarkan jumlah enrolls terbanyak
    coursesWithEnrolls.sort((a, b) => b.enrolls.length - a.enrolls.length);

    return coursesWithEnrolls;
  };

  return {
    findAll,
    findById,
    findByTitle,
    findByUserId,
    findPopulars,
  };
})();

module.exports = courseService;
