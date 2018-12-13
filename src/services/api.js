import axios from 'axios';
import { getToken } from './auth';

const API_BASE = 'http://127.0.0.1:1337';

axios.defaults.baseURL = API_BASE;
const get = (url, params = {}) => axios.get(url, { params });
const put = (url, params = {}) => axios.put(url, params);
const post = (url, params = {}) => axios.post(url, params);
// const destroy = (url, params = {}) => axios.delete(url, params);

axios.interceptors.request.use(config => {
  const token = getToken();
  config.headers.Authorization = `JWT ${token}`;
  return config;
});

export default {
  API_BASE,
  getToken,
  login: {
    do: params => {
      const loginParams = {
        ...params,
        schema: 'user',
        provider: 'local',
      };
      return post('/auth/signin', loginParams);
    },
  },
  orders: {
    list: ({ page }) => get(`/order/find/${page}`),
    findById: orderId => get(`/order/findbyid/${orderId}`),
  },
  cancel: {
    list: params => get('/cancel', params),
    create: ({ orderId, ...params }) =>
      post(`/cancel/${orderId}/order`, params),
    get: orderId => get(`/cancel/${orderId}/order`),
    update: ({ orderId, ...params }) => put(`/cancel/${orderId}/order`, params),
  },
  alerts: {
    list: params => get('/alert', params),
  },
  products: {
    list: ids =>
      post('/product/multiplefindbyids', { ids, populate_fields: [] }),
  },
};
