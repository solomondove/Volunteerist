import { connect } from 'react-redux';
import AskOfferForm from './create_ask_offer_form';
import { createAsk } from '../../actions/ask_actions';
import { fetchUser } from "../../actions/user_actions";

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        formType: "Create an Ask"
    })
}

const mDTP = dispatch => {
    return ({
        processForm: ask => dispatch(createAsk(ask)),
        fetchUser: user => dispatch(fetchUser(user))
    })
}

export default connect(mSTP, mDTP)(AskOfferForm)