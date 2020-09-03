import { fetchUserAsks, clearAsk, updateAsk } from "../../actions/ask_actions";
import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import UserAsksIndex from './user_asks_index';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    asks: Object.values(state.entities.asks)
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUserAsks: (userId) => dispatch(fetchUserAsks(userId)),
    clearAsk: (askId) => dispatch(clearAsk(askId)),
    updateAsk: (ask) => dispatch(updateAsk(ask)),
    fetchUser: userId => dispatch(fetchUser(userId))
  };
};

export default connect(mSTP, mDTP)(UserAsksIndex);
