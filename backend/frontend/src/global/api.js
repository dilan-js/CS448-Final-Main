/*eslint-disable*/
import axios from "axios";

const api = axios.create({
  // baseURL: "/api",
  // baseURL: "http://localhost:3001/api/",
  baseURL: "/api/",
});

// const api = axios.create({
//   // baseURL: "/api",
//   // baseURL: "http://localhost:3000/api/",
//   baseURL: "/api/",
// });

// api.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token");
//   if (token && !config.url.includes("register")) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });
export default api;