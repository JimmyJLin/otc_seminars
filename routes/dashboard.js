module.exports = app => {
  /* api routes */
  app.get('/dashboard', (req, res) => {
    res.render('pages/dashboard/dashboard');
  });
};
