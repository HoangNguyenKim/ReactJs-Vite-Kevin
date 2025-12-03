import axios from "axios";
const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


/* ============================
    RESPONSE INTERCEPTOR
=============================== */
instance.interceptors.response.use(
    (response) => {
        if (response.data && response.data.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        if (error.response && error.response.data) return error.response.data;
    }
);


export default instance;