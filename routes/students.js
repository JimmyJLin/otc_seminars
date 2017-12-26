const studentDb = require('../db/pgp/students');

module.exports = app => {

  // ALL students
  app.get('/students', studentDb.getAllStudents, (req, res) => {
    const studentData = res.studentData;
    res.render('pages/students/students', { studentData });
  });

  // ONE Student
  app.get('/students/:id', studentDb.getOneStudent, studentDb.getStudentHistory, (req, res) => {
    const profileData = res.profileData;
    const studentHistory = res.studentHistory;
    // console.log('studentHistory', studentHistory);
    res.render('pages/students/profile', { profileData, studentHistory });
  });
};
