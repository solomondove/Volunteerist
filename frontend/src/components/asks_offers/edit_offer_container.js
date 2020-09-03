import { connect } from "react-redux";
import CreateAskOfferForm from "./create_ask_offer_form";
import { updateOffer, clearOffer, fetchOffer } from "../../actions/offer_actions";
import { clearOfferErrors } from "../../actions/offer_actions";
import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
  return {
    data: state.entities.offers[ownProps.match.params.offer_id],
    formType: "Edit Offer",
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    errors: state.errors.offers,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchOffer: (offerId) => dispatch(fetchOffer(offerId)),
    processForm: (offer) => dispatch(updateOffer(offer)),
    clearOffer: (offerId) => dispatch(clearOffer(offerId)),
    clearErrors: () => dispatch(clearOfferErrors()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(CreateAskOfferForm));
