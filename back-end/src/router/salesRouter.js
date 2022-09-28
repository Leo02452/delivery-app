const { Router } = require('express');
const salesController = require('../controllers/salesController');
const { tokenValidation } = require('../middlewares/tokenValidation');

const route = Router();

route.post('/sales', tokenValidation, salesController.create);

module.exports = route;
