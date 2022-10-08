const { Router } = require('express');
const usersController = require('../controllers/usersController');
const { roleValidation } = require('../middlewares/roleValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');
const { userValidation } = require('../middlewares/userValidation');

const route = Router();

route.get('/search', usersController.list);
route.get('/:id', usersController.findByPk);
route.delete('/:id', tokenValidation, roleValidation, usersController.delete);
route.post('/', userValidation, tokenValidation, roleValidation, usersController.create);

module.exports = route;
