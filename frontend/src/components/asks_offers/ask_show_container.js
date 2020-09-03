import { connect } from 'react-redux';
import AskShow from './ask_show';
import { fetchAsk, addAskComment } from '../../actions/ask_actions';
import { fetchAskComments } from '../../actions/comment_actions';

const mSTP = (state, { match }) => {
  return ({
    currentUser: state.session.user,
    askId: match.params.ask_id,
    comments: state.entities.comments
  })
}

const mDTP = dispatch => {
  return ({
    fetchAsk: (askId) => (dispatch(fetchAsk(askId))),
    addAskComment: (comment) => (dispatch(addAskComment(comment))),
    fetchAskComments: (askId) => (dispatch(fetchAskComments(askId)))
  })
}

export default connect(mSTP, mDTP)(AskShow)