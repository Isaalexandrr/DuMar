
import axios from 'axios';

const instance = axios.create();

// Adiciona o token ao cabeçalho de autorização
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;