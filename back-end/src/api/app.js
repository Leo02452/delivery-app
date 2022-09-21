const express = require('express');
require('express-async-errors');
const error = require('../middleware/error');
const authRouter = require('../router/authRouter');

const app = express();
app.use(express.json());

app.use('/login', authRouter);
app.use(error);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
