module.exports = app => {
  /* api routes */
  app.get('/api/seminars', (req, res) => {
    res.render('pages/seminars/seminars');
  });
};
