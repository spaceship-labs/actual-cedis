import axios from 'axios';
import { getToken } from './auth';

const API_BASE = 'https://sandboxapi.miactual.com';

axios.defaults.baseURL = API_BASE;
const get = (url, params = {}) => axios.get(url, { params });
const put = (url, params = {}) => axios.put(url, params);
const post = (url, params = {}) => axios.post(url, params);
const destroy = (url, params = {}) => axios.delete(url, params);

axios.interceptors.request.use(function(config) {
  const token = getToken();
  config.headers.Authorization = `JWT ${token}`;
  return config;
});

function objectToForm(obj, form, level) {
  let f = form || new FormData();

  for (let k in obj) {
    if (obj.hasOwnProperty(k)) {
      let levelProp = level ? level + '[' + k + ']' : k;

      if (
        typeof obj[k] === 'object' &&
        obj[k] != null &&
        !(obj[k] instanceof File)
      ) {
        objectToForm(obj[k], f, levelProp);
        continue;
      }

      f.set(levelProp, obj[k]);
    }
  }

  return f;
}

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
};
