import { RECEIVE_OFFER_ERRORS, CLEAR_OFFER_ERRORS } from '../actions/offer_actions';

const _nullErrors = [];

const OfferErrorsReducer = (oldState = _nullErrors, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_OFFER_ERRORS:
            return action.errors;
        case CLEAR_OFFER_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default OfferErrorsReducer;