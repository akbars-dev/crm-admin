require('dotenv').config();
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const exphbs = require('express-handlebars');
const path = require('path');
const parser = require('body-parser');


const api = require('./routes/api/index');
const router = require('./routes/admin/index');
const notFound = require('./middlewares/404-middleware')

const database = require('./utils/database-util');

const app = express();


app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(parser.urlencoded({ extended: true }))
app.use(express.json());

// set template engine
app.engine('hbs', exphbs.engine({ extname: 'hbs', partialsDir: path.join(__dirname, '../', 'views', 'partials') }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../', 'views'));

// set flash
app.use(session({ secret: 'secret-key', resave: true, saveUninitialized: true }));
app.use(flash());

// set routes
app.use('/api', api);
app.use('/', router);
app.use(notFound)

database(process.env.DB_URI);
app.listen(process.env.PORT, () => console.log(`> Server started on port: ${process.env.PORT}`));