const db = require('../db/pgp/hairstrokes');

module.exports = app => {

  // hairstrokes
  app.get('/seminars/hairstrokes', db.getAllHairstrokeSeminar, (req, res) => {
    const data = res.rows
    // console.log('data ', data.class);
    res.render('pages/seminars/hairstrokes/hairstrokes', { data });
  });

  app.post('/seminars/hairstrokes', db.allHairstrokeSeminar, (req, res) => {
    res.redirect('/seminars/hairstrokes');
  });

  app.get('/seminars/hairstrokes/class/:id', db.getOneHairstrokesClass, db.getClassAttendees, (req, res) => {
    const classData = res.class;
    const attendeeData = res.attendee;
    res.render('pages/seminars/hairstrokes/class', { classData, attendeeData });
  });

  app.post('/seminars/hairstrokes/class/:id', db.addOneAttendee, (req, res) => {
    const id = req.params.id;
    // console.log('req.body', req.body);
    res.redirect('/seminars/hairstrokes/class/' + id);
  });

  app.post('/seminars/hairstrokes/class/attendees/delete', db.deleteRecord, (req, res) => {
    res.redirect('back');
  });

  app.get('/seminars/hairstrokes/class/attendees/update/:id', db.getClassAttendeesByEmail, (req, res) => {
    const attendeeDataByEmail = res.attendeeByEmail;
    res.render('pages/seminars/update', { attendeeDataByEmail });
    // res.redirect('back');
  });

};
