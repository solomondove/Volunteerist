import { RECEIVE_USER_ASKS, REMOVE_ASK, RECEIVE_ASK, RECEIVE_ALL_ASKS } from '../actions/ask_actions';

export default function (oldState = {}, action) {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ASK:
            newState[action.ask.id] = action.ask
            return newState
        case RECEIVE_ALL_ASKS:
            return action.asks
        case RECEIVE_USER_ASKS:
            return action.asks;
        case REMOVE_ASK:
            delete newState[action.askId];
            return newState;
        default:
            return oldState;
    }
}