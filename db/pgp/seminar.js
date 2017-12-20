const db = require('./pgp');

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

function addOneAttendee(req, res, next) {
  db.none('INSERT INTO Attendees (class_id, first_name, last_name, email, phone, total, deposit, balance, full_payment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9 )', [req.params.id, req.body.first_name, req.body.last_name, req.body.email, req.body.phone, req.body.total, req.body.deposit, req.body.balance, req.body.full_payment])
    .then((data) => {
      // console.log('New Attendee added', data);
      next();
    })
    .catch((error) => {
      console.error('error adding new Attendee', error);
    });
}

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

function deleteRecord(req, res, next) {
  console.log('data from deleteRecord', req.body.student_email);
  db.any('DELETE FROM Attendees where email = $1', [req.body.student_email])
    .then((data) => {
      console.log('deleted attendee', data);
      next();
    })
    .catch((error) => {
      console.error('error deleting attendee', error);
    });
}

function getClassAttendeesByEmail(req, res, next) {
  db.any('SELECT * FROM Attendees WHERE email = $1', [req.params.id])
    .then((data) => {
      res.attendeeByEmail = data;
      // console.log('data');
      next();
    })
    .catch((error) => {
      console.log(error);
    });
}

function updateClassAttendeesByEmail(req, res, next) {

  db.any('UPDATE Attendees SET (first_name, last_name, email, phone, total, deposit, balance, full_payment) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE email = $9 RETURNING class_id', [req.body.first_name, req.body.last_name, req.body.email, req.body.phone, req.body.total, req.body.deposit, req.body.balance, req.body.full_payment, req.body.email])
  .then((data) => {
    res.classId = data[0]
    console.log(' Attendee Updated', data);
    next();
  })
  .catch((error) => {
    console.error('error updating Attendee', error);
  });
}

module.exports.deleteRecord = deleteRecord;
module.exports.getClassAttendees = getClassAttendees;
module.exports.addOneAttendee = addOneAttendee;
module.exports.getOneClass = getOneClass;
module.exports.updateClassAttendeesByEmail = updateClassAttendeesByEmail;
module.exports.getClassAttendeesByEmail = getClassAttendeesByEmail;
