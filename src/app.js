require('dotenv').config();
const express = require('express');

const path = require('path');
const router = require('./routes/index');
const database = require('./utils/database-util');

const app = express();


app.use(express.static(path.join(__dirname, '../', 'views')));
app.use(express.json());

// set routes
app.use('/api', router);


database(process.env.DB_URI);
app.listen(process.env.PORT, () => console.log(`> Server started on port: ${process.env.PORT}`));