const seminarDb = require('../db/pgp/seminar');

module.exports = app => {

  // hairstrokes
  app.get('/seminars/:id', seminarDb.getAllSeminars, (req, res) => {
    // console.log('para id: -----', req.params)
    const classData = res.classData;
    // console.log('data ', classData);
    res.render('pages/seminars/hairstrokes/hairstrokes', { classData });
  });

  app.post('/seminars/:id', seminarDb.addOneSeminar, (req, res) => {
    res.redirect('/seminars/hairstrokes');
  });

  app.get('/seminars/class/:id', seminarDb.getOneClass, seminarDb.getClassAttendees, (req, res) => {
    const classData = res.class;
    const attendeeData = res.attendeeData;
    console.log('attendeeData', attendeeData);
    res.render('pages/seminars/hairstrokes/class', { classData, attendeeData });
  });

  app.post('/seminars/class/:id', seminarDb.addOneAttendee, (req, res) => {
    const id = req.params.id;
    // console.log('req.body', req.body);
    res.redirect('/seminars/class/' + id);
  });

  app.post('/seminars/class/attendees/delete', seminarDb.deleteRecord, (req, res) => {
    res.redirect('back');
  });

};
