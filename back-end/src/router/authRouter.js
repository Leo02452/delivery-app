const { Router } = require('express');
const usersController = require('../controllers/usersController');
const authValidate = require('../middleware/validateLogin');

const auth = Router();

auth.post('/login',
authValidate.login,
usersController.login);

auth.post('/register',
authValidate.register,
usersController.register);

module.exports = auth;