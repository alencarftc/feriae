import axios from 'axios';

const api = axios.create({ baseURL: `https://cors-anywhere.herokuapp.com/https://date.nager.at/api/v2/` });

export default api;