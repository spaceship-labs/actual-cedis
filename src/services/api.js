import axios from 'axios';
import { getToken } from './auth';

// const API_BASE = 'https://sandboxapi.miactual.com';
const API_BASE = 'https://stagedapi.miactual.com';
// const API_BASE = 'http://192.168.1.101:1337';

axios.defaults.baseURL = API_BASE;
const get = (url, params = {}) => axios.get(url, { params });
const put = (url, params = {}) => axios.put(url, params);
const post = (url, params = {}) => axios.post(url, params);
// const destroy = (url, params = {}) => axios.delete(url, params);

axios.interceptors.request.use(config => {
  const configuration = config;
  const token = getToken();
  configuration.headers.Authorization = `JWT ${token}`;
  return configuration;
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
    list: ({ page }) => get(`/order?page=${page}`),
    findById: orderId => get(`/order/findbyid/${orderId}`),
    search: params => get('/order/findbyfilter', params),
  },
  cancel: {
    list: params => get('/cancel', params),
    create: ({ orderId, ...params }) => {
      console.log(orderId, params);
      return post(`/cancel/${orderId}/order`, params);
    },
    get: orderId => get(`/cancel/${orderId}/order`),
    update: ({ id, ...params }) => put(`/cancel/${id}/order`, params),
    search: params => get('/cancel/findbyfilter', params),
  },
  alerts: {
    list: params => get('/alert', { params }),
  },
  products: {
    list: ids =>
      post('/product/multiplefindbyids', { ids, populate_fields: [] }),
  },
};
