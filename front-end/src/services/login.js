import axios from 'axios';
// import * as dotenv from 'dotenv';

// dotenv.config();

// const { REACT_APP_HOSTNAME, REACT_APP_BACKEND_PORT } = process.env;

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

async function userLogin({ email, password }) {
  try {
    const response = await instance.post('login', { email, password });
    return response;
  } catch (error) {
    return error.response.data;
  }
}

export default userLogin;
