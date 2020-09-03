import { fetchUserAsks, clearAsk, updateAsk, fetchAsks } from "../../actions/ask_actions";
import { connect } from "react-redux";
import AsksIndex from './asks_index';

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
    fetchAsks: () => dispatch(fetchAsks()),
    clearAsk: (askId) => dispatch(clearAsk(askId)),
    updateAsk: (ask) => dispatch(updateAsk(ask))
  };
};

export default connect(mSTP, mDTP)(AsksIndex);
