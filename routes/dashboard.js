module.exports = app => {
  /* api routes */
  app.get('/api/dashboard', (req, res) => {
    res.render('pages/dashboard/dashboard');
  });
};
