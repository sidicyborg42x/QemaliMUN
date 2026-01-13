import axios from 'axios';

const axiosInstance = axios.create({
    // Render URL
    baseURL: 'https://qemalimun-backend.onrender.com/api/', 
});

export default axiosInstance;
