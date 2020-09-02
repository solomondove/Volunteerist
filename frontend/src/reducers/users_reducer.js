import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function (oldState = initialState, action) {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let tempId = action.currentUser._id;
            return {[tempId]: action.currentUser};
        case RECEIVE_USER:
            newState[action.user.data._id] = action.user.data;
            return newState;
        default:
            return oldState;
    }
}
