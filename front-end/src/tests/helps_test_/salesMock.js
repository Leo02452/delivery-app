export const sellerOrderDetailMock = {
  id: 1,
  userId: 1,
  sellerId: 2,
  totalPrice: '15.00',
  deliveryAddress: 'any-address',
  deliveryNumber: 'any-date',
  saleDate: '2022-10-14T23:51:05.000Z',
  status: 'Pendente',
  products: [
    {
      id: 1,
      name: 'Skol Lata 250ml',
      price: '2.20',
      urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
      SalesProduct: {
        quantity: 10,
      },
    },
    {
      id: 2,
      name: 'Heineken 600ml',
      price: '7.50',
      urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
      SalesProduct: {
        quantity: 5,
      },
    },
  ],
  seller: {
    name: 'Fulana Pereira',
  },
};

export const customerOrderDetailMock = {
  ...sellerOrderDetailMock,
  status: 'Em Trânsito',
};

export const salesByUser = [
  {
    id: 1,
    userId: 1,
    sellerId: 2,
    totalPrice: '15.00',
    deliveryAddress: '',
    deliveryNumber: 'any-date',
    saleDate: '2022-10-14T23:51:05.000Z',
    status: 'Pendente',
  },
];
