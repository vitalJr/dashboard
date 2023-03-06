import { Axios } from 'axios';

export const BASE_URL = 'https://localhost:1234';

export const axiosConfig = {
  baseURL: BASE_URL,
};

const axios = new Axios(axiosConfig);

export default axios;
