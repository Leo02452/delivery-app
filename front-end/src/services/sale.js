import axiosInstance from './axiosInstance';

async function saveSale(sale) {
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
      products });
    return response;
  } catch (error) {
    return error.response.data;
  }
}
export default saveSale;
