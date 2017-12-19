const db = require('./pgp');

function getAllHairstrokeSeminar(req, res, next) {
  db.any('SELECT * FROM Hairstrokes')
    .then((data) => {
      res.rows = data;
      console.log('all Hairstrokes sekinars', data)
      next();
    })
    .catch((error) => {
      console.error(error);
    });
}

function allHairstrokeSeminar(req, res, next) {
  db.none('INSERT INTO Hairstrokes (class_type, class_date, class_attendee, class_completed) VALUES ($1, $2, $3, $4);', [req.body.seminar, req.body.date, 0, false])
    .then((data) => {
      console.log('New Seminar Added', data);
      next();
    })
    .catch(() => {
      console.error('error adding new seminar to Hairstrokes');
    });
}

function getOneHairstrokesClass(req, res, next) {
  db.any('SELECT * FROM Hairstrokes where class_id = $1', [req.params.id])
    .then((data) => {
      res.rows = data;
      console.log('data');
      next();
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports.getOneHairstrokesClass = getOneHairstrokesClass;
module.exports.getAllHairstrokeSeminar = getAllHairstrokeSeminar;
module.exports.allHairstrokeSeminar = allHairstrokeSeminar;
