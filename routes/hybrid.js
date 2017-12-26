const seminarDb = require('../db/pgp/seminar');

module.exports = app => {
  // hybrid
  app.get('/seminars/:id', seminarDb.getAllSeminars, (req, res) => {
    const data = res.rows;
    console.log('data ----> ', data.class);
    res.render('pages/seminars/hybrid/hybrid', { data });
  });
};
