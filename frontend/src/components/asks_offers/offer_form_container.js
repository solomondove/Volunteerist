import { connect } from 'react-redux';
import AskOfferForm from './create_ask_offer_form';
import { createOffer, clearOfferErrors } from '../../actions/offer_actions';
import { fetchUser } from "../../actions/user_actions";

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        formType: "Create an Offer",
        errors: state.errors.offers,
    })
}

const mDTP = dispatch => {
    return ({
        processForm: offer => dispatch(createOffer(offer)),
        fetchUser: userId => dispatch(fetchUser(userId)),
        clearErrors: () => dispatch(clearOfferErrors())
    })
}

export default connect(mSTP, mDTP)(AskOfferForm)