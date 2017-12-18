module.exports = app => {
  /* api routes */
  app.get('/api/students', (req, res) => {
    res.render('pages/students/students');
  });
};
