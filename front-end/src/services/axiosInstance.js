import axios from 'axios';

export default instance = axios.create({
  baseURL: 'http://localhost:3001',
});
