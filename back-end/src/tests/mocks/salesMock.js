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
}

module.exports = { saleMock, updatedSaleMock };
