import { connect } from 'react-redux';
import AskShow from './ask_show';
import { fetchAsk } from '../../actions/ask_actions';

const mSTP = (state, { match }) => {
  return ({
    currentUser: state.entities.users[state.session.id],
    askId: match.params.ask_id
  })
}

const mDTP = dispatch => {
  return ({
    fetchAsk: (askId) => (dispatch(fetchAsk(askId)))
  })
}

export default connect(mSTP, mDTP)(AskShow)