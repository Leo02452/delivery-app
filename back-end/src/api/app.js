const express = require('express');
require('express-async-errors');
const cors = require('cors');
const path = require('path');

const error = require('../middlewares/error');
const authRouter = require('../router/authRouter');
const productsRouter = require('../router/productsRouter');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../../public/images')));
app.use('/images', express.static('public'));
app.use('/', authRouter);
app.use('/', productsRouter);
app.use(error);

module.exports = app;
