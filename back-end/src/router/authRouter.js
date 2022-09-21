const { Router } = require('express');
const usersController = require('../controllers/usersController');
const authValidate = require('../middleware/validateLogin');

const auth = Router();

auth.post('/',
authValidate.login,
usersController.login);

module.exports = auth;