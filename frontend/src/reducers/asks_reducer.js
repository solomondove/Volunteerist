import { RECEIVE_USER_ASKS, REMOVE_ASK, RECEIVE_ASK, RECEIVE_ALL_ASKS } from '../actions/ask_actions';

export default function (oldState = {}, action) {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ASK:
            newState[action.ask.data._id] = action.ask.data
            return newState
        case RECEIVE_ALL_ASKS:
            newState = {};
            action.asks.data.forEach(ask => {
                newState[ask._id] = ask
            })
            return newState
        case RECEIVE_USER_ASKS:
            newState = {};
            action.asks.data.forEach(ask => {
                newState[ask._id] = ask
            });
            return newState
        case REMOVE_ASK:
            delete newState[action.askId.data];
            return newState;
        default:
            return oldState;
    }
}