

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
const updateUserAPI = () => {

}
const fetchAllUser = () => {
    const URL = "/api/v1/user";

    return axios.get(URL);
}
export {
    createUserAPI,
    fetchAllUser, updateUserAPI
}