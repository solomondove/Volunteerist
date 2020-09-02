import axios from 'axios';

export const getUser = userId => {
    return axios.get(`/api/users/${userId}`)
}