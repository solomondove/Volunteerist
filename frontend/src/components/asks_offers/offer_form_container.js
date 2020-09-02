import { connect } from 'react-redux';
import AskOfferForm from './create_ask_offer_form';
import { createOffer } from '../../actions/offer_actions';

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        formType: "Create an Offer"
    })
}

const mDTP = dispatch => {
    return ({
        processForm: Offer => dispatch(createOffer(Offer))
    })
}

export default connect(mSTP, mDTP)(AskOfferForm)