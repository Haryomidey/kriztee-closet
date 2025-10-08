import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api",
});

// ✅ Request interceptor
API.interceptors.request.use(
    (config) => {
        // Example: Attach token from localStorage
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

API.interceptors.response.use(
    (response) => response,
    (error) => {
        // Example: Handle 401 Unauthorized globally
        if (error.response?.status === 401) {
            // maybe redirect to login
            console.warn("Unauthorized, logging out...");
            localStorage.removeItem("token");
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default API;