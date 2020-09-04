import { fetchOffers, clearOffer, fetchOffer } from "../../actions/offer_actions";
import { fetchUser } from "../../actions/user_actions";
import { connect } from "react-redux";
import OffersIndex from "./offers_index";

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    offers: Object.values(state.entities.offers),
  };
};

const mDTP = (dispatch) => {
  return {
    fetchOffers: () => dispatch(fetchOffers()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    clearOffer: id => dispatch(clearOffer(id)),
    fetchOffer: offerId => dispatch(fetchOffer(offerId))
  };
};

export default connect(mSTP, mDTP)(OffersIndex);
