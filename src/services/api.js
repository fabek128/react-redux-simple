import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

const setHeaders = () => {
  const token = { token: 'blablablabla' };

  return { headers: token ? { token: `${token}` } : {} };
};

const apiClient = {
  get(url) {
    return axios.get(url, setHeaders());
  },
  post(url, body) {
    return axios.post(url, body, setHeaders());
  },
  put(url, body) {
    return axios.put(url, body, setHeaders());
  },
};

export default {
  setWord(wordObj) {
    return apiClient.post('/word', wordObj);
  },
};