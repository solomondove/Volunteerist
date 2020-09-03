import * as OfferAPIUtil from '../util/offer_api_util';

export const RECEIVE_ALL_OFFERS = "RECEIVE_ALL_OFFERS";
export const RECEIVE_OFFER = "RECEIVE_OFFER";
export const REMOVE_OFFER = "REMOVE_OFFER";
export const RECEIVE_USER_OFFERS = "RECEIVE_USER_OFFERS";
export const RECEIVE_OFFER_ERRORS = "RECEIVE_OFFER_ERRORS";
export const CLEAR_OFFER_ERRORS = "CLEAR_OFFER_ERRORS";

export const receiveAllOffers = (offers) => {
    return ({
        type: RECEIVE_ALL_OFFERS,
        offers
    })
};

export const receiveOffer = (offer) => {
    return ({
        type: RECEIVE_OFFER,
        offer
    })
}

export const removeOffer = (offerId) => {
    return ({
        type: REMOVE_OFFER,
        offerId
    })
}

export const receiveUserOffers = (offers) => {
    return ({
        type: RECEIVE_USER_OFFERS,
        offers
    })
}

export const receiveOfferErrors = errors => {
    return ({
        type: RECEIVE_OFFER_ERRORS,
        errors
    })
}

export const clearOfferErrors = () => {
    return ({
        type: CLEAR_OFFER_ERRORS
    })
}

export const fetchOffers = () => dispatch => {
    return OfferAPIUtil.getOffers()
        .then(offers => dispatch(receiveAllOffers(offers)),
            (err) => dispatch(receiveOfferErrors(err.response.data))
        );
}

export const fetchOffer = offerId => dispatch => {
    return OfferAPIUtil.getOffer(offerId)
        .then(offer => dispatch(receiveOffer(offer)),
            (err) => dispatch(receiveOfferErrors(err.response.data))
        );
}

export const createOffer = offer => dispatch => {
    return OfferAPIUtil.postOffer(offer)
        .then(offer => { 
            dispatch(receiveOffer(offer))
            return offer
        })
        .catch((err) => dispatch(receiveOfferErrors(err.response.data))
        );
}

export const updateOffer = offer => dispatch => {
    return OfferAPIUtil.editOffer(offer)
        .then(offer => dispatch(receiveOffer(offer)),
            (err) => dispatch(receiveOfferErrors(err.response.data))
        );
}

export const clearOffer = offerId => dispatch => {
    return OfferAPIUtil.deleteOffer(offerId)
        .then(offerId => dispatch(removeOffer(offerId)),
            (err) => dispatch(receiveOfferErrors(err.response.data))
        );
}

export const fetchUserOffers = id => dispatch => {
    return OfferAPIUtil.getUserOffers(id)
        .then(offers => dispatch(receiveUserOffers(offers)),
            (err) => dispatch(receiveOfferErrors(err.response.data))
        );
}

export const fetchAcceptor = (offerId, userId) => dispatch => {
    return OfferAPIUtil.addAcceptor(offerId, userId)
        .then((offer) => dispatch(receiveOffer(offer)),
            (err) => dispatch(receiveOfferErrors(err.response.data))
        );
}