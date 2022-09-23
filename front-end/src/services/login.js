import axiosInstance from './axiosInstance';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const { REACT_APP_HOSTNAME, REACT_APP_BACKEND_PORT } = process.env;

async function userLogin({ email, password }) {
  try {
    const response = await axiosInstance.post('login', { email, password });
    return response;
  } catch (error) {
    return error.response.data;
  }
}

export default userLogin;
