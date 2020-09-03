import axios from "axios";

export const fetchAskComments = (askId) => {
  return axios.get(`/api/asks/${askId}/comments`);
};