const db = require('./pgp');


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

module.exports.updateClassAttendeesByEmail = updateClassAttendeesByEmail;
module.exports.getClassAttendeesByEmail = getClassAttendeesByEmail;
