import axios from "axios";
import config from "../config";

const api =  axios.create({
  baseURL:
    config.SERVER_API_URL ||
    "https://animade-production.up.railway.app/api",
  headers: {
    Authorization: `Token ${JSON.parse(localStorage.getItem("token"))}`,
    "content-type": "application/json",
  },
});

api.interceptors.response.use((response) => {
  return response;
}, (err) => {
  if (err?.response.status === 401 && err?.response.data.detail === 'Invalid token.') {
    // localStorage.removeItem('token');
    // window.location.href = '/login';
  }
  return Promise.reject(err);
});

export default api;
