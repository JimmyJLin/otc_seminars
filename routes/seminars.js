const seminarDb = require('../db/pgp/seminar');

module.exports = app => {

  // Seminar Routes
  app.get('/seminars/:id', seminarDb.getAllSeminars, (req, res) => {
    console.log('para id: -----', req.params.id)
    const classData = res.classData;
    // console.log('data ', classData);
    const getUrl = `pages/seminars/` + req.params.id + '/' + req.params.id;
    res.render(getUrl, { classData });
  });
  app.post('/seminars/:id', seminarDb.addOneSeminar, (req, res) => {
    const postUrl = `/seminars/` + req.params.id;
    res.redirect(postUrl);
  });


};
