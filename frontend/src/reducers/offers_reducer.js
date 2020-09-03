import { RECEIVE_USER_OFFERS, REMOVE_OFFER, RECEIVE_OFFER, RECEIVE_ALL_OFFERS } from '../actions/offer_actions';

export default function (oldState = {}, action) {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_OFFER:
            newState[action.offer.data._id] = action.offer.data
            return newState
        case RECEIVE_ALL_OFFERS:
            newState = {}
            action.offers.data.forEach((offer) => {
              newState[offer._id] = offer;
            });
            return newState
        case RECEIVE_USER_OFFERS:
            newState = {}
            action.offers.data.forEach((offer) => {
                newState[offer._id] = offer;
            });
            return newState
        case REMOVE_OFFER:
            delete newState[action.offerId];
            return newState;
        default:
            return oldState;
    }
}