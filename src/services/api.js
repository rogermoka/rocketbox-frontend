import axios from 'axios';

const api = axios.create({
    baseURL: 'https://roger-omnistack-backend.herokuapp.com',
});

export default api;