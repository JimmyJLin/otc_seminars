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


module.exports.getAllHairstrokeSeminar = getAllHairstrokeSeminar;
module.exports.allHairstrokeSeminar = allHairstrokeSeminar;
