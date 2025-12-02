import axios from "axios";
const instance = axios.create({
    baseURL: "http://localhost:8080"
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
        const status = error?.response?.status;
        const message = error?.response?.data?.message;

        if (status === 400) {
            notification.error({
                message: "Bad Request",
                description: message || "Dữ liệu không hợp lệ!"
            });
        }

        if (status === 401) {
            notification.error({
                message: "Unauthorized",
                description: "Bạn cần đăng nhập lại!"
            });
            localStorage.removeItem("access_token");
            window.location.href = "/login";
        }

        if (status === 403) {
            notification.warning({
                message: "Forbidden",
                description: "Bạn không có quyền truy cập!"
            });
        }

        if (status === 500) {
            notification.error({
                message: "Server Error",
                description: "Lỗi hệ thống!"
            });
        }

        return Promise.reject(error);
    }
);


export default instance;