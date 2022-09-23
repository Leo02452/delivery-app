import axiosInstance from './axiosInstance';

async function userRegister({ name, email, password }) {
  try {
    const response = await axiosInstance.post('register', { name, email, password });
    return response;
  } catch (error) {
    return error.response.data;
  }
}
export default userRegister;
