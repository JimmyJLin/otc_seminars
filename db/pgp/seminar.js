const db = require('./pgp');

// GET ALL seminars based on category
function getAllSeminars(req, res, next) {
  // console.log("params", req.params.id)
  db.any('SELECT * FROM Class WHERE class_category = $1', [req.params.id])
    .then((data) => {
      res.classData = data;
      // console.log('all Hairstrokes seminars', data)
      next();
    })
    .catch((error) => {
      console.error(error);
    });
}

// ADD ONE seminar.
function addOneSeminar(req, res, next) {
  db.none('INSERT INTO Class (class_category, class_type, class_date, class_attendee, class_completed) VALUES ($1, $2, $3, $4, $5);', [req.params.id, req.body.seminar, req.body.date, 0, false])
    .then((data) => {
      // console.log('New Seminar Added', data);
      next();
    })
    .catch(() => {
      console.error('error adding new seminar to Hairstrokes');
    });
}

// GET ONE Class info based on class id
function getOneClass(req, res, next) {
  db.any('SELECT * FROM Class where id = $1', [req.params.id])
    .then((data) => {
      res.class = data;
      // console.log('data');
      next();
    })
    .catch((error) => {
      console.log(error);
    });
}

// ADD ONE Attendee to class
function addOneAttendee(req, res, next) {
  db.any('INSERT INTO Attendees (class_id, first_name, last_name, email, phone, total, deposit, balance, full_payment, discount, referral, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )', [req.params.id, req.body.first_name, req.body.last_name, req.body.email, req.body.phone, req.body.total, req.body.deposit, req.body.balance, req.body.full_payment, req.body.discount, req.body.referral, req.body.notes])
    .then((data) => {
      // console.log('returning email', data[0]);
      db.any('INSERT INTO Students (first_name, last_name, email, phone) SELECT $1, $2, $3, $4 WHERE NOT EXISTS (SELECT 1 FROM Students WHERE email = $3)', [req.body.first_name, req.body.last_name, req.body.email, req.body.phone])
        .then((data) => {
          // console.log('added new studdent')
        })
        .catch((error) => {
          console.error('error adding new Students', error);
        });
      next();
    })
    .catch((error) => {
      console.error('error adding new Attendee', error);
    });
}

// GET ALL attendees based on class id
function getClassAttendees(req, res, next) {
  db.any('SELECT * FROM Attendees where class_id = $1', [req.params.id])
    .then((data) => {
      res.attendee = data;
      // console.log('data');
      next();
    })
    .catch((error) => {
      console.log(error);
    });
}

// Delete ONE attendee from class
function deleteRecord(req, res, next) {
  // console.log('data from deleteRecord', req.body.student_email);
  db.any('DELETE FROM Attendees where phone = $1', [req.body.phone])
    .then((data) => {
      // console.log('deleted attendee', data);
      next();
    })
    .catch((error) => {
      console.error('error deleting attendee', error);
    });
}

// GET ONE attendee info based on email
function getClassAttendeesByEmail(req, res, next) {
  db.any('SELECT * FROM Attendees WHERE phone = $1', [req.params.id])
    .then((data) => {
      res.attendeeByEmail = data;
      // console.log('data');
      next();
    })
    .catch((error) => {
      console.log(error);
    });
}

// UPDATE ONE attendee based on email and return class_id
function updateClassAttendeesByEmail(req, res, next) {
  db.any('UPDATE Attendees SET (first_name, last_name, email, phone, total, deposit, balance, full_payment) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE phone = $4 RETURNING class_id', [req.body.first_name, req.body.last_name, req.body.email, req.body.phone, req.body.total, req.body.deposit, req.body.balance, req.body.full_payment, req.body.email])
  .then((data) => {
    res.classId = data[0]
    // console.log(' Attendee Updated', data);
    next();
  })
  .catch((error) => {
    console.error('error updating Attendee', error);
  });
}

module.exports.getAllSeminars = getAllSeminars;
module.exports.addOneSeminar = addOneSeminar;
module.exports.deleteRecord = deleteRecord;
module.exports.getClassAttendees = getClassAttendees;
module.exports.addOneAttendee = addOneAttendee;
module.exports.getOneClass = getOneClass;
module.exports.updateClassAttendeesByEmail = updateClassAttendeesByEmail;
module.exports.getClassAttendeesByEmail = getClassAttendeesByEmail;
