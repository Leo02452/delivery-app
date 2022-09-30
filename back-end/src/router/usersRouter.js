const { Router } = require('express');
const usersController = require('../controllers/usersController');

const route = Router();

route.get('/users/search', usersController.list);
route.get('/users/:id', usersController.findByPk);

module.exports = route;
