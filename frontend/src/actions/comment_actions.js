import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_ASK_COMMENTS = "RECEIVE_ASK_COMMENTS";

export const receiveAskComments = (comments) => {
  return ({
    type: RECEIVE_ASK_COMMENTS,
    comments
  })
};

export const fetchAskComments = askId => dispatch => {
  return CommentAPIUtil.fetchAskComments(askId)
    .then(comments => dispatch(receiveAskComments(comments)))
}