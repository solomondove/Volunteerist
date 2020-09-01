import { connect } from 'react-redux';
import AskOfferForm from './create_ask_offer_form';
import { createAsk } from '../../actions/ask_actions';

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        formType: "Create an Ask"
    })
}

const mDTP = dispatch => {
    return ({
        processForm: ask => dispatch(createAsk(ask))
    })
}

export default connect(mSTP, mDTP)(AskOfferForm)