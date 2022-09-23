import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
});

async function userRegister({ name, email, password }) {
  try {
    const response = await instance.post('register', { name, email, password });
    return response;
  } catch (error) {
    return error.response.data;
  }
}
export default userRegister;
