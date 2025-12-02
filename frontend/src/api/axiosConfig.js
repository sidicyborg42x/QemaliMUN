import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/',  //django api base URL
});

export default axiosInstance;


