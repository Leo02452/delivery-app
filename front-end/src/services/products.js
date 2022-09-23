import instance from './axiosInstance';

async function getAllProducts() {
  try {
    const response = await instance.get('products');
    return response;
  } catch (error) {
    return error.response.data;
  }
}

export default { getAllProducts };
