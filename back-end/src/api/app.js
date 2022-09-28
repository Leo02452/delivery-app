const express = require('express');
require('express-async-errors');
const cors = require('cors');
const path = require('path');

const error = require('../middleware/error');
const authRouter = require('../router/authRouter');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// app.use('/images', express.static(path.join(__dirname, '../../public/images')));
app.use('/images', express.static('public'));
app.use('/', authRouter);
app.use(error);

module.exports = app;
