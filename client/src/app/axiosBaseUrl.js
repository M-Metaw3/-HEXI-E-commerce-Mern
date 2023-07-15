import axios from "axios";

// Server URL
const axiosBaseUrl = axios.create({baseURL: "https://e-commerce-9kwf.onrender.com/api"});

export default axiosBaseUrl;
