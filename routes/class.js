const seminarDb = require('../db/pgp/seminar');

module.exports = app => {

  // Attendee Update Routes
  app.get('/seminars/attendees/update/:id', seminarDb.getClassAttendeesByEmail, (req, res) => {
    const attendeeDataByEmail = res.attendeeByEmail;
    res.render('pages/seminars/update', { attendeeDataByEmail });
    // res.redirect('back');
  });
  app.post('/seminars/attendees/update/:id', seminarDb.updateClassAttendees, (req, res) => {
    // console.log('classId', res.classId.class_id);
    // const id = req.params.id;
    // console.log('id', id);
    res.redirect(`/seminars/class/` + res.classId.class_id);
  });

  // Class Routes
  app.get('/seminars/class/:id', seminarDb.getOneClass, seminarDb.getClassAttendees, (req, res) => {
    const classData = res.class;
    const attendeeData = res.attendeeData;
    // console.log('attendeeData', attendeeData);
    res.render('pages/seminars/class', { classData, attendeeData });
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
