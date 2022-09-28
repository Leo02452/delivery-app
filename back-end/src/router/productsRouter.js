const { Router } = require('express');
const productsController = require('../controllers/productsController');

const route = Router();

route.get('/customer/products', productsController.getall);

module.exports = route;
