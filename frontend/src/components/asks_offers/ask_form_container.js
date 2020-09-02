import { connect } from 'react-redux';
import AskOfferForm from './create_ask_offer_form';
import { createAsk, clearAskErrors } from '../../actions/ask_actions';
import { fetchUser } from "../../actions/user_actions";

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        formType: "Create an Ask",
        errors: state.errors.asks,
    })
}

const mDTP = dispatch => {
    return ({
        processForm: ask => dispatch(createAsk(ask)),
        fetchUser: userId => dispatch(fetchUser(userId)),
        clearErrors: () => dispatch(clearAskErrors())
    })
}

export default connect(mSTP, mDTP)(AskOfferForm)