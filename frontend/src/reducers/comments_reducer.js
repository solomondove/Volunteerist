import { RECEIVE_ASK_COMMENTS } from '../actions/comment_actions';

export default function (oldState = {}, action) {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ASK_COMMENTS:
      return action.comments.data;
    default:
      return oldState;
  }
}