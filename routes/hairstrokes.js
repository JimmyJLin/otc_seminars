const hsDb = require('../db/pgp/hairstrokes');
const seminarDb = require('../db/pgp/seminar');

module.exports = app => {

  // hairstrokes
  app.get('/seminars/hairstrokes', hsDb.getAllHairstrokeSeminar, (req, res) => {
    const data = res.rows
    // console.log('data ', data.class);
    res.render('pages/seminars/hairstrokes/hairstrokes', { data });
  });

  app.post('/seminars/hairstrokes', hsDb.allHairstrokeSeminar, (req, res) => {
    res.redirect('/seminars/hairstrokes');
  });

  app.get('/seminars/class/:id', seminarDb.getOneClass, seminarDb.getClassAttendees, (req, res) => {
    const classData = res.class;
    const attendeeData = res.attendee;
    res.render('pages/seminars/hairstrokes/class', { classData, attendeeData });
  });

  app.post('/seminars/class/:id', seminarDb.addOneAttendee, (req, res) => {
    const id = req.params.id;
    // console.log('req.body', req.body);
    res.redirect('/seminars/hairstrokes/class/' + id);
  });

  app.post('/seminars/class/attendees/delete', seminarDb.deleteRecord, (req, res) => {
    res.redirect('back');
  });

};
