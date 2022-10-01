const express = require('express');
require('express-async-errors');
const cors = require('cors');

const error = require('../middlewares/error');
const authRouter = require('../router/authRouter');
const productsRouter = require('../router/productsRouter');
const salesRouter = require('../router/salesRouter');
const usersRouter = require('../router/usersRouter');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/images', express.static('public'));
app.use('/', authRouter);
app.use('/', productsRouter);
app.use('/', salesRouter);
app.use('/users', usersRouter);
app.use(error);

module.exports = app;
