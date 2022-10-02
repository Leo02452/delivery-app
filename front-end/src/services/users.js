import axiosInstance from './axiosInstance';

async function createUser(user, token) {
  try {
    const response = await axiosInstance.post('users', user, { headers: {
      authorization: token,
    } });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
export default createUser;
