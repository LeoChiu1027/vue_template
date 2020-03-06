import axios from "axios";
import constant from '@/constant'
console.log(constant.apiUrl)

const axiosInstance = axios.create({
    baseURL: constant.apiUrl,
    timeout: 2500,
    withCredentials: true
});

export default axiosInstance