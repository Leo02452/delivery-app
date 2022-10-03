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

async function updateSaleStatus(id, statusObj, token) {
  try {
    const response = await axiosInstance.patch(`sales/${id}`, statusObj, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export { updateSaleStatus };
export default saveSale;
