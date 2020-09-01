import * as AskAPIUtil from '../util/ask_api_util';

export const RECEIVE_ALL_ASKS = "RECEIVE_ALL_ASKS";
export const RECEIVE_ASK = "RECEIVE_ASK";
export const REMOVE_ASK = "REMOVE_ASK";
export const RECEIVE_USER_ASKS = "RECEIVE_USER_ASKS"

export const receiveAllAsks = (asks) => {
    return ({
        type: RECEIVE_ALL_ASKS,
        asks
    })
};

export const receiveAsk = (ask) => {
    return ({
        type: RECEIVE_ASK,
        ask
    })
}

export const removeAsk = (askId) => {
    return ({
        type: REMOVE_ASK,
        askId
    })
}

export const receiveUserAsks = (asks) => {
    return ({
        type: RECEIVE_USER_ASKS,
        asks
    })
}


export const fetchAsks = () => dispatch => {
    return AskAPIUtil.getAsks()
        .then(asks => dispatch(receiveAllAsks(asks)))
}

export const fetchAsk = askId => dispatch => {
    return AskAPIUtil.getAsk(askId)
        .then(ask => dispatch(receiveAsk(ask)))
} 

export const createAsk = ask => dispatch => {
    return AskAPIUtil.postAsk(ask)
        .then(ask => dispatch(receiveAsk(ask)))
}

export const updateAsk = ask => dispatch => {
    return AskAPIUtil.editAsk(ask)
        .then(ask => dispatch(receiveAsk(ask)))
}

export const clearAsk = askId => dispatch => {
    return AskAPIUtil.deleteAsk(askId)
        .then(askId => dispatch(removeAsk(askId)))
}

export const fetchUserAsks = id => dispatch => {
    return AskAPIUtil.getUserAsks(id)
        .then(asks => dispatch(receiveUserAsks(asks)))
}

