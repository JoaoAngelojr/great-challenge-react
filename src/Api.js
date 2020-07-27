import axios from 'axios';

const api = axios.create({
    baseURL: 'URL_FROM_YOUR_WEB_API'
});

export default api;