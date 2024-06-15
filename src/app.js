require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const parser = require('body-parser');

const api = require('./routes/api/index');
const database = require('./utils/database-util');

const app = express();


app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(parser.urlencoded({ extended: true }))
app.use(express.json());

// set template engine
app.engine('hbs', exphbs.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../', 'views'));

// set routes
app.use('/api', api);


database(process.env.DB_URI);
app.listen(process.env.PORT, () => console.log(`> Server started on port: ${process.env.PORT}`));