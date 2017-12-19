const db = require('../db/pgp/hairstrokes');

module.exports = app => {
  /* api routes */
  app.get('/seminars', (req, res) => {
    res.render('pages/seminars/seminars');
  });

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

  // hybrid
  app.get('/seminars/hybrid', (req, res) => {
    res.render('pages/seminars/hybrid');
  });


  // powdered
  app.get('/seminars/powdered', (req, res) => {
    res.render('pages/seminars/powdered');
  });


  // lips
  app.get('/seminars/lips', (req, res) => {
    res.render('pages/seminars/lips');
  });


  // eyeliners
  app.get('/seminars/eyeliners', (req, res) => {
    res.render('pages/seminars/eyeliners');
  });


  // areola
  app.get('/seminars/areola', (req, res) => {
    res.render('pages/seminars/areola');
  });


  // hairline
  app.get('/seminars/hairline', (req, res) => {
    res.render('pages/seminars/hairline');
  });


  // others
  app.get('/seminars/others', (req, res) => {
    res.render('pages/seminars/others');
  });


};
