import { connect } from "react-redux";
import CreateAskOfferForm from "./create_ask_offer_form";
import { updateAsk, clearAsk, fetchAsk } from '../../actions/ask_actions';
import { clearAskErrors } from "../../actions/ask_actions";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
    return {
      data: state.entities.asks[ownProps.match.params.ask_id],
      formType: "Edit Ask",
      currentUser: state.entities.users[state.session.id],
      currentUserId: state.session.id,
      errors: state.errors.asks,
    };
}

const mDTP = (dispatch) => {
    return {
      fetchAsk: (askId) => dispatch(fetchAsk(askId)),
      processForm: (ask) => dispatch(updateAsk(ask)),
      clearAsk: (askId) => dispatch(clearAsk(askId)),
      clearErrors: () => dispatch(clearAskErrors()),
      fetchUser: (userId) => dispatch(fetchUser(userId))
    };
}

export default withRouter(connect(mSTP, mDTP)(CreateAskOfferForm))