const db = require('./pgp');

// Get ONE Student
function getOneStudent(req, res, next) {
  db.any('SELECT * FROM Students where email = $1', [req.params.id])
    .then((data) => {
      res.class = data;
      // console.log('data');
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
  db.any('UPDATE Students SET (first_name, last_name, email, phone) = ($1, $2, $3, $4) WHERE email = $3 RETURNING email', [req.body.first_name, req.body.last_name, req.body.email, req.body.phone])
  .then((data) => {
    res.studentId = data[0]
    console.log(' Student Updated', data);
    next();
  })
  .catch((error) => {
    console.error('error updating Attendee', error);
  });
}

module.exports.getOneStudent = getOneStudent;
module.exports.getAllStudents = getAllStudents;
module.exports.updateOneStudent = updateOneStudent;
