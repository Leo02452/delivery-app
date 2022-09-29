const { Router } = require('express');
const usersController = require('../controllers/usersController');

const route = Router();

route.get('/users/search', usersController.list);

module.exports = route;
