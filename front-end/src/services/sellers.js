import instance from './axiosInstance';

async function getAllSellers() {
  try {
    const response = await instance.get('users/search?r=sellers');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export default { getAllSellers };
