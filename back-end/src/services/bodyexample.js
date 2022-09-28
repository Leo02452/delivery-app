export const requestBody = {
  sellerId: 'number',
  totalPrice: 'number',
  deliveryAddress: 'string',
  deliveryNumber: 'string',
  status: 'string',
  products: [{
    productId: 'number',
    quantity: 'number',
  }],
};

// {
//   "sellerId": 2,
//   "totalPrice": 40.00,
//   "deliveryAddress": "string",
//   "deliveryNumber": "string",
//   "status": "string",
//   "products": [{
//     "id": 1,
//     "quantity": 10
//   }]
// }
