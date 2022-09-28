const { z } = require('zod');
const jwtService = require('../services/jwtService');


const saveSaleBody = z.object({
  sellerId: z.number({
    required_error: 'sellerId is required',
    invalid_type_error: 'sellerId must be a number',
  }),
  totalPrice: z.number({
    required_error: 'totalPrice is required',
    invalid_type_error: 'totalPrice must be a number',
  }),
  deliveryAddress: z.string({
    required_error: 'deliveryAddress is required',
    invalid_type_error: 'deliveryAddress must be a string',
  }),
  deliveryNumber: z.string({
    required_error: 'deliveryNumber is required',
    invalid_type_error: 'deliveryNumber must be a string',
  }),
  status: z.enum(['Pendente', 'Preparando', 'Em Trânsito', 'Entregue']).optional(),
  products: z.array(z.object({
    id: z.number({
      required_error: 'id is required',
      invalid_type_error: 'id must be a number',
    }),
    quantity: z.number({
      required_error: 'quantity is required',
      invalid_type_error: 'quantity must be a number',
    }),
  })),
  });

const saleValidation = {
  saveSale(req, res, next) {
    saveSaleBody.parse(req.body);
  
    next();
  }
}

module.exports = saleValidation;
