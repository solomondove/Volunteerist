import axios from "axios";

export const fetchAskComments = (askId) => {
  return axios.get(`/api/asks/${askId}/comments`);
};

export const fetchOfferComments = (offerId) => {
  return axios.get(`/api/offers/${offerId}/comments`);
};