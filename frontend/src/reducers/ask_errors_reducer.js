import { RECEIVE_ASK_ERRORS, CLEAR_ASK_ERRORS } from '../actions/ask_actions';

const _nullErrors = [];

const AskErrorsReducer = (oldState = _nullErrors, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_ASK_ERRORS:
            return action.errors;
        case CLEAR_ASK_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default AskErrorsReducer;