import { fetchUserOffers, clearOffer, updateOffer } from "../../actions/offer_actions";
import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import UserOffersIndex from "./user_offers_index";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    offers: Object.values(state.entities.offers),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchUserOffers: (userId) => dispatch(fetchUserOffers(userId)),
    clearOffer: (offerId) => dispatch(clearOffer(offerId)),
    updateOffer: (offer) => dispatch(updateOffer(offer)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(mSTP, mDTP)(UserOffersIndex);
