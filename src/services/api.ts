import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.mocki.io/v1/bd262601'
})

export default api;