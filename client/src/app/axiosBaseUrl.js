import axios from "axios";

// Server URL
 const axiosBaseUrl = axios.create({baseURL: "http://127.0.0.1:5000/api"});
// const axiosBaseUrl = axios.create({baseURL: "https://e-commerce-9kwf.onrender.com/api"});


export default axiosBaseUrl;
