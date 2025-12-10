

import axios from './api.customize';
const createUserAPI = (fullName, Email, Password, PhoneNumber) => {
    const URL = "/api/v1/user";
    const userData = {
        fullName: fullName,
        email: Email,
        password: Password,
        phone: PhoneNumber
    }
    return axios.post(URL, userData);
}
const updateUserAPI = (id, fullName, PhoneNumber) => {
    const URL = "/api/v1/user";
    const userData = {
        _id: id,
        fullName: fullName,

        phone: PhoneNumber
    }
    return axios.put(URL, userData);
}
const deleteUserAPI = (id) => {
    const URL = "/api/v1/user/" + id;

    return axios.delete(URL);
}

const fetchAllUser = () => {
    const URL = "/api/v1/user";

    return axios.get(URL);
}
export {
    createUserAPI,
    fetchAllUser,
    updateUserAPI,
    deleteUserAPI
}