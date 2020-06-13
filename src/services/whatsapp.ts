import axios from 'axios';

const whatsapp = axios.create({
  baseURL: 'whatsapp://send?text=teste&phone=9999999999',
});

export default whatsapp;
