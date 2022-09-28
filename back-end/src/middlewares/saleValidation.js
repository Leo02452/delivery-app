const { z } = require('zod');

const saveSaleBody = z.object({
  sellerId: z.number(),
  totalPrice: z.number(),
  deliveryAddress: z.string(),
  deliveryNumber: z.string(),
  status: z.enum(['Pendente', 'Preparando', 'Em Trânsito', 'Entregue']).optional(),
  products: z.array(z.object({
    id: z.number(),
    quantity: z.number(),
  })),
  });

const saleValidation = {
  saveSale(req, res, next) {
    saveSaleBody.parse(req.body);
  
    next();
  },
};

module.exports = saleValidation;
