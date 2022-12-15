const saleMock = {
  id: 1,
  userId: 1,
  sellerId: 2,
  totalPrice: 10.00,
  deliveryAddress: 'any-address',
  deliveryNumber: 'any-delivery-number',
  saleDate: 'any-date',
  status: 'Pendente'
};

const updatedSaleMock = {
  ...saleMock,
  status: 'Preparando'
};

const createSaleBody = {
  sellerId: 2,
  totalPrice: 15.00,
  deliveryAddress: 'any-address',
  deliveryNumber: 'any-date',
  status: 'Pendente',
  products: [{ id: 1, quantity: 10 }, { id: 2, quantity: 5 }]
};

const invalidCreateSaleBody = {
  ...createSaleBody,
  deliveryAddress: 5
}

const createdSaleMock = {
  ...createSaleBody,
  id: 2,
  userId: 1,
  saleDate: 'any-date'
}

module.exports = {
  saleMock,
  updatedSaleMock,
  createSaleBody,
  createdSaleMock,
  invalidCreateSaleBody
};
