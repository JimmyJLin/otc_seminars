module.exports = app => {
  /* api routes */
  app.get('/', (req, res) => {
    res.render('pages/index');
  });
};
