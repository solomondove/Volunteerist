import * as AskAPIUtil from '../util/ask_api_util';

export const RECEIVE_ALL_ASKS = "RECEIVE_ALL_ASKS";
export const RECEIVE_ASK = "RECEIVE_ASK";
export const REMOVE_ASK = "REMOVE_ASK";
export const RECEIVE_USER_ASKS = "RECEIVE_USER_ASKS";
export const RECEIVE_ASK_ERRORS = "RECEIVE_ASK_ERRORS";
export const CLEAR_ASK_ERRORS = "CLEAR_ASK_ERRORS";

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

export const receiveAskErrors = errors => {
    return ({
        type: RECEIVE_ASK_ERRORS,
        errors
    })
}

export const clearAskErrors = () => {
    return ({
        type: CLEAR_ASK_ERRORS
    })
}


export const fetchAsks = () => dispatch => {
    return AskAPIUtil.getAsks()
        .then(asks => dispatch(receiveAllAsks(asks)),
            (err) => dispatch(receiveAskErrors(err.response.data))
        );
}

export const fetchAsk = askId => dispatch => {
    return AskAPIUtil.getAsk(askId)
        .then(ask => dispatch(receiveAsk(ask)),
            (err) => dispatch(receiveAskErrors(err.response.data))
        );
} 

export const createAsk = ask => dispatch => { 
    return AskAPIUtil.postAsk(ask)
        .then(ask => dispatch(receiveAsk(ask)),
            (err) => dispatch(receiveAskErrors(err.response.data))
        );
}

export const updateAsk = ask => dispatch => {
    return AskAPIUtil.editAsk(ask)
        .then(ask => dispatch(receiveAsk(ask)),
            (err) => dispatch(receiveAskErrors(err.response.data))
        );
}

export const clearAsk = askId => dispatch => {
    return AskAPIUtil.deleteAsk(askId)
        .then(askId => dispatch(removeAsk(askId)),
            (err) => dispatch(receiveAskErrors(err.response.data))
        );
}

export const fetchUserAsks = id => dispatch => {
    return AskAPIUtil.getUserAsks(id)
        .then(asks => dispatch(receiveUserAsks(asks)),
            (err) => dispatch(receiveAskErrors(err.response.data))
        );
}

export const addAskComment = partialAsk => dispatch => {
    return AskAPIUtil.addAskComment(partialAsk)
        .then(ask => dispatch(receiveAsk(ask)))
}

export const fetchVolunteer = (askId, userId) => dispatch => {
    return AskAPIUtil.addVolunteer(askId, userId)
        .then((ask) => dispatch(receiveAsk(ask)),
            (err) => dispatch(receiveAskErrors(err.response.data))
        );
}


