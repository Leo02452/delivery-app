import axiosInstance from './axiosInstance';

async function saveSale(sale, token) {
  const {
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status,
    products,
  } = sale;

  try {
    const response = await axiosInstance.post('sales', {
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      status,
      products }, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
}

/*
 {
  "sellerId": 2,
  "totalPrice": 123,
  "deliveryAddress": "erfrfrg",
  "deliveryNumber": "23",
  "products":[{
  "id": 2,
 "quantity": 2,
 }]
 } */

export default saveSale;
