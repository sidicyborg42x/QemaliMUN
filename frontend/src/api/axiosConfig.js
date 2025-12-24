import axios from 'axios';

const axiosInstance = axios.create({
    // Replace this with your actual Render URL
    baseURL: 'https://qemalimun-backend.onrender.com/api/', 
});

export default axiosInstance;