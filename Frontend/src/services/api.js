// import axios from 'axios'

// const api = axios.create({
//     baseURL: 'http://localhost:5001/api/v1/employees',
// })
// export default api

import axios from 'axios';

const apiRoot = 'http://localhost:5001/api/v1/employees';

const apiClient = axios.create({
  baseURL: apiRoot,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
});

const get = (path) => apiClient.get(path).then(response => response.data);
const post = (path, payload) => apiClient.post(path, payload).then(response => response.data);
const patch = (path, payload) => apiClient.patch(path, payload).then(response => response.data);
const deleteRequest = (path) => apiClient.delete(path).then(response => response.data);

export { get, post, patch, deleteRequest };