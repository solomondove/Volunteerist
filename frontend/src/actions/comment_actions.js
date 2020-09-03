import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ASK_COMMENTS = "RECEIVE_ASK_COMMENTS";
export const RECEIVE_OFFER_COMMENTS = "RECEIVE_OFFER_COMMENTS";

export const receiveAskComments = (comments) => {
  return ({
    type: RECEIVE_ASK_COMMENTS,
    comments
  })
};

export const receiveOfferComments = (comments) => {
  return ({
    type: RECEIVE_OFFER_COMMENTS,
    comments
  })
}

export const fetchAskComments = askId => dispatch => {
  return CommentAPIUtil.fetchAskComments(askId)
    .then(comments => dispatch(receiveAskComments(comments)))
}

export const fetchOfferComments = offerId => dispatch => {
  return CommentAPIUtil.fetchOfferComments(offerId)
    .then(comments => dispatch(receiveOfferComments(comments)))
}