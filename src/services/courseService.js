const createKnex = require('@config/createKnex');

const knex = createKnex();

const courseService = (() => {
  const findDetail = async (courseId) => {
    const course = await knex('course').where('id', courseId).first('judul');

    const sections = await knex('section').where('course_id', courseId).select('id', 'judul_section');

    const result = {
      title: course.judul,
      courses: [],
    };

    for (const section of sections) {
      const videos = await knex('video').where('section_id', section.id).select('id', 'judul_video', 'link');

      const formattedSection = {
        id: section.id,
        title: section.judul_section,
        sections: videos,
      };

      result.courses.push(formattedSection);
    }

    return result;
  };

  const findById = async (courseId) => {
    const course = await knex.select('*').from('course').where('id', courseId).first();

    return course;
  };

  const findAllByUser = async (id) => {
    const userId = id ? Number(id) : null;

    const courses = await knex('course')
      .leftJoin('enroll', function () {
        this.on('course.id', '=', 'enroll.id_course').andOn('enroll.id_user', '=', userId);
      })
      .select('course.*')
      .whereNull('enroll.id'); // Mengambil course yang belum di enroll oleh user

    return courses;
  };

  const findAll = async (id) => {
    const userId = id !== undefined ? Number(id) : null;

    const rawData = await knex('interests').select('*').where('userId', userId).first();

    const userInterest = {
      id: 0,
      judul: '',
      topic: rawData.topicId, // Here, you need to fetch the actual topic data based on topicId
      kategori: rawData.kategoriId, // Fetch kategori data based on categoryId
      level: rawData.levelId, // Fetch level data based on levelId
    };

    const courseData = await knex('course')
      .join('subkategori', 'course.subkategori_id', '=', 'subkategori.id')
      .join('kategori', 'subkategori.kategori_id', '=', 'kategori.id')
      .join('level', 'course.level_id', '=', 'level.id')
      .join('topic', 'topic.course_id', '=', 'course.id')
      .select(
        'course.id',
        'course.judul',
        'subkategori.keterangan as subkategori',
        'kategori.keterangan as kategori',
        'level.keterangan as level',
        'topic.keterangan as topic'
      )
      .whereNot('course.id', rawData.topicId) // Exclude user's interest topic
      .andWhereNot('course.id', userInterest.id) // Exclude user's interest course
      .orderBy('course.id');

    return [userInterest, ...courseData];
  };

  const findByUserIdAll = async (id) => {
    const userId = id ? Number(id) : null;

    const courses = await knex('course')
      .join('enroll', 'course.id', 'enroll.id_course')
      .join('transactions', 'enroll.transactionId', 'transactions.id')
      .select('course.*', 'transactions.statusId')
      .andWhere('enroll.id_user', userId)
      .andWhere(knex.raw('?? IS NOT NULL', ['enroll.id_user'])); // Tambahkan ini

    return courses;
  };

  const findByUserId = async (id) => {
    const userId = id ? Number(id) : null;

    const courses = await knex('course')
      .join('enroll', 'course.id', 'enroll.id_course')
      .join('transactions', 'enroll.transactionId', 'transactions.id')
      .select('course.*')
      .where('transactions.statusId', 1)
      .andWhere('enroll.id_user', userId)
      .andWhere(knex.raw('?? IS NOT NULL', ['enroll.id_user'])); // Tambahkan ini

    return courses;
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
    findDetail,
    findByTitle,
    findByUserId,
    findPopulars,
    findAllByUser,
    findByUserIdAll,
  };
})();

module.exports = courseService;
