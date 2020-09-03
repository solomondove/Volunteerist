import { connect } from 'react-redux';
import OfferShow from './offer_show';
import { fetchUser } from '../../actions/user_actions';
import { fetchOffer, addOfferComment, clearOffer } from '../../actions/offer_actions';
import { fetchOfferComments } from '../../actions/comment_actions';
import { fetchAcceptor } from "../../actions/offer_actions"; 

const mSTP = (state, { match }) => {
  let posterId;
  if (state.entities.offers[match.params.offer_id]) {
    posterId = state.entities.offers[match.params.offer_id].posterId
  }
  return ({
    currentUserId: state.session.id,
    offerId: match.params.offer_id,
    comments: state.entities.comments,
    postUser: state.entities.users[posterId],
    offer: state.entities.offers[match.params.offer_id],
    posterId
  })
}

const mDTP = dispatch => {
  return ({
    fetchOffer: (offerId) => (dispatch(fetchOffer(offerId))),
    addOfferComment: (comment) => (dispatch(addOfferComment(comment))),
    fetchOfferComments: (offerId) => (dispatch(fetchOfferComments(offerId))),
    fetchUser: (userId) => (dispatch(fetchUser(userId))),
    fetchAcceptor: (offerId, userId) => dispatch(fetchAcceptor(offerId, userId)),
    clearOffer: offerId => dispatch(clearOffer(offerId))
  })
}

export default connect(mSTP, mDTP)(OfferShow)