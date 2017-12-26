const db = require('./pgp');

// Get ONE Student
function getOneStudent(req, res, next) {
  db.any('SELECT * FROM Students where phone = $1', [req.params.id])
    .then((data) => {
      res.profileData = data;
      next();
    })
    .catch((error) => {
      console.log(error);
    });
}


// Get ALL Students
function getAllStudents(req, res, next) {
  db.any('SELECT * FROM Students;')
    .then((data) => {
      res.studentData = data;
      next();
    })
    .catch((error) => {
      console.error(error);
    });
}


// Update ONE Student
function updateOneStudent(req, res, next) {
  db.any('UPDATE Students SET (first_name, last_name, email, phone) = ($1, $2, $3, $4) WHERE phone = $4 RETURNING email', [req.body.first_name, req.body.last_name, req.body.email, req.body.phone])
  .then((data) => {
    res.studentId = data[0]
    console.log(' Student Updated', data);
    next();
  })
  .catch((error) => {
    console.error('error updating Attendee', error);
  });
}

// Get Student Class History
function getStudentHistory(req, res, next) {
  db.any('SELECT * FROM class, attendees WHERE class.id = attendees.class_id AND phone = $1;', [req.params.id])
    .then((data) => {
      res.studentHistory = data;
      next();
    })
    .catch((error) => {
      console.error(error);
    });
}

module.exports.getOneStudent = getOneStudent;
module.exports.getAllStudents = getAllStudents;
module.exports.updateOneStudent = updateOneStudent;
module.exports.getStudentHistory = getStudentHistory;
