const { Router } = require('express');
const salesController = require('../controllers/salesController');
const { tokenValidation } = require('../middlewares/tokenValidation');
const { saveSale } = require('../middlewares/saleValidation');

const route = Router();

route.post('/sales',
  tokenValidation,
  saveSale,
  salesController.create);

route.get('/sales/search',
  salesController.detailsList);
  
route.get('/sales/:id',
  salesController.getById);

route.patch('/sales/:id',
tokenValidation,
salesController.editStatus);

module.exports = route;
