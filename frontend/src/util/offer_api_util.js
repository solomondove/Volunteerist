import axios from "axios";

export const getOffers = () => {
    return axios.get("/api/offers");
};

export const getOffer = (offerId) => {
    return axios.get(`/api/offers/${offerId}`);
};

export const postOffer = (offer) => {
    return axios.post("/api/offers/", offer);
};

export const editOffer = (offer) => {
    return axios.patch(`/api/offers/${offer.id}`)
}

export const deleteOffer = (offerId) => {
    return axios.delete(`/api/offers/${offerId}`)
}