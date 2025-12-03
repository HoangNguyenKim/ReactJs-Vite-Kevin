

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
const upadateUserAPI = () => {

}
export {
    createUserAPI
}