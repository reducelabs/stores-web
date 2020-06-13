import axios from 'axios';

const ibge = axios.create({
  baseURL: 'http://localhost:3333',
});

export default ibge;
