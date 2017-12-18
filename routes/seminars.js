module.exports = app => {
  /* api routes */
  app.get('/seminars', (req, res) => {
    res.render('pages/seminars/seminars');
  });

  app.get('/seminars/hairstrokes', (req, res) => {
    res.render('pages/seminars/hairstrokes');
  });

  app.get('/seminars/powdered', (req, res) => {
    res.render('pages/seminars/powdered');
  });

  app.get('/seminars/lips', (req, res) => {
    res.render('pages/seminars/lips');
  });

  app.get('/seminars/eyeliners', (req, res) => {
    res.render('pages/seminars/eyeliners');
  });

  app.get('/seminars/areola', (req, res) => {
    res.render('pages/seminars/areola');
  });

  app.get('/seminars/hairline', (req, res) => {
    res.render('pages/seminars/hairline');
  });
};
