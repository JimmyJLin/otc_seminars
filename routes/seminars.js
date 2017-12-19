module.exports = app => {
  /* api routes */
  app.get('/seminars', (req, res) => {
    res.render('pages/seminars/seminars');
  });

  // hairstrokes
  app.get('/seminars/hairstrokes', (req, res) => {
    res.render('pages/seminars/hairstrokes');
  });

  app.post('/seminars/hairstrokes', (req, res) => {
    const seminar = req.body.seminar;
    const date = req.body.date;

    console.log('data -----', seminar, date);

    res.redirect('/seminars/hairstrokes');
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
