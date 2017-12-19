module.exports = app => {
  /* api routes */
  app.get('/', (req, res) => {
    res.render('pages/index');
  });

  app.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    console.log('login email', email);
    console.log('login password', password);

    res.redirect('/dashboard');
  });
};
