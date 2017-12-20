const db = require('./pgp');

function getAllHairstrokeSeminar(req, res, next) {
  const category = 'hairstrokes'
  db.any('SELECT * FROM Class WHERE class_category = $1', [category])
    .then((data) => {
      res.rows = data;
      // console.log('all Hairstrokes seminars', data)
      next();
    })
    .catch((error) => {
      console.error(error);
    });
}

function allHairstrokeSeminar(req, res, next) {
  const category = 'hairstrokes'
  db.none('INSERT INTO Class (class_category, class_type, class_date, class_attendee, class_completed) VALUES ($1, $2, $3, $4, $5);', [category, req.body.seminar, req.body.date, 0, false])
    .then((data) => {
      // console.log('New Seminar Added', data);
      next();
    })
    .catch(() => {
      console.error('error adding new seminar to Hairstrokes');
    });
}

function getOneHairstrokesClass(req, res, next) {
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

module.exports.getClassAttendees = getClassAttendees;
module.exports.addOneAttendee = addOneAttendee;
module.exports.getOneHairstrokesClass = getOneHairstrokesClass;
module.exports.getAllHairstrokeSeminar = getAllHairstrokeSeminar;
module.exports.allHairstrokeSeminar = allHairstrokeSeminar;
