const db = require('../db/pgp/hairstrokes');

module.exports = app => {

  // hairstrokes
  app.get('/seminars/hairstrokes', db.getAllHairstrokeSeminar, (req, res) => {
    const data = res.rows
    console.log('data ', data.class);
    res.render('pages/seminars/hairstrokes/hairstrokes', { data });
  });

  app.post('/seminars/hairstrokes', db.allHairstrokeSeminar, (req, res) => {
    res.redirect('/seminars/hairstrokes');
  });

  app.get('/seminars/hairstrokes/class/:id', db.getOneHairstrokesClass, (req, res) => {
    const data = res.rows
    res.render('pages/seminars/hairstrokes/class', { data });
  });

  app.post('/seminars/hairstrokes/class/:id', db.addOneAttendee, (req, res) => {
    console.log('req.body', req.body);
    res.status(200);
    // res.redirect('/seminars/hairstrokes/class/:id');
  });

};
