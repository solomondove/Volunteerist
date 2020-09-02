import { getUser } from '../util/user_api_util';


export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
    return ({
        type: RECEIVE_USER,
        user
    })
};


export const fetchUser = userId => dispatch => {
    return getUser(userId)
        .then(user => dispatch(receiveUser(user)))
}

