const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const engine = require('ejs-mate');

/* app setting */
const app = express();


/* express server setting  */
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', './views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

/* routes */
require('./routes/main')(app);
require('./routes/dashboard')(app);
require('./routes/seminars')(app);
require('./routes/class')(app);
require('./routes/hybrid')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
