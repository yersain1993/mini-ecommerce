import axios from 'axios';

export const axiosInstances = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
});