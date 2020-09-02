import { connect } from 'react-redux';
import AskShow from './ask_show';
import { fetchAsk, addAskComment } from '../../actions/ask_actions';

const mSTP = (state, { match }) => {
  return ({
    currentUser: state.session.user,
    askId: match.params.ask_id
  })
}

const mDTP = dispatch => {
  return ({
    fetchAsk: (askId) => (dispatch(fetchAsk(askId))),
    addAskComment: (comment) => (dispatch(addAskComment(comment)))
  })
}

export default connect(mSTP, mDTP)(AskShow)