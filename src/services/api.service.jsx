

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

const fetchAllUser = (currentPage, pageSize) => {
    const URL = `/api/v1/user?current=${currentPage}&pageSize=${pageSize}`;

    return axios.get(URL);
}
const upLoadFile = (file, type) => {
    const URL = "/api/v1/file/upload";
    const formData = new FormData();
    formData.append("fileImg", file);
    let config = {
        headers: {
            "upload-type": type,
            "Content-Type": "multipart/form-data"
        }
    }

    return axios.post(URL, formData, config);
}
const updateAvatarAPI = (newAvatar, id, phoneNumber, fullName) => {
    const URL = "/api/v1/user";
    const userData = {
        _id: id,
        fullName: fullName,
        avatar: newAvatar,
        phone: phoneNumber
    }
    return axios.put(URL, userData);

}
export {
    createUserAPI,
    fetchAllUser,
    updateUserAPI,
    deleteUserAPI,
    upLoadFile, updateAvatarAPI
}