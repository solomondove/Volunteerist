import axios from 'axios';

export const getUser = userId => {
    return axios.get(`/api/users/${userId}`)
}

export const rateUser = (userId, newStats) => {
    return axios.patch(`/api/users/update/${userId}`, newStats)
}