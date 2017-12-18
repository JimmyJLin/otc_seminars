module.exports = app => {
  /* api routes */
  app.get('/students', (req, res) => {
    res.render('pages/students/students');
  });
};
