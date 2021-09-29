import axios from 'axios';

export const key = '9082dbdf77f8ac13140546ae1e66ec8d'
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
