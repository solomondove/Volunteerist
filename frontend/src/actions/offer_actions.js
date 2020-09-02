import * as OfferAPIUtil from '../util/offer_api_util';

export const RECEIVE_ALL_OFFERS = "RECEIVE_ALL_OFFERS";
export const RECEIVE_OFFER = "RECEIVE_OFFER";
export const REMOVE_OFFER = "REMOVE_OFFER";
export const RECEIVE_USER_OFFERS = "RECEIVE_USER_OFFERS"

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

export const fetchOffers = () => dispatch => {
    return OfferAPIUtil.getOffers()
        .then(offers => dispatch(receiveAllOffers(offers)))
}

export const fetchOffer = offerId => dispatch => {
    return OfferAPIUtil.getOffer(offerId)
        .then(offer => dispatch(receiveOffer(offer)))
}

export const createOffer = offer => dispatch => {
    return OfferAPIUtil.postOffer(offer)
        .then(offer => dispatch(receiveOffer(offer)))
}

export const updateOffer = offer => dispatch => {
    return OfferAPIUtil.editOffer(offer)
        .then(offer => dispatch(receiveOffer(offer)))
}

export const clearOffer = offerId => dispatch => {
    return OfferAPIUtil.deleteOffer(offerId)
        .then(offerId => dispatch(removeOffer(offerId)))
}

export const fetchUserOffers = id => dispatch => {
    return OfferAPIUtil.getUserOffers(id)
        .then(offers => dispatch(receiveUserOffers(offers)))
}