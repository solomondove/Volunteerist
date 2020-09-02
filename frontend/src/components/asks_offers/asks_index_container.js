import { fetchAsks } from '../../actions/ask_actions';
import { connect } from 'react-redux';

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
    })
}

const mDTP = dispatch => {
    return ({
        fetchAsks: () => dispatch(fetchAsks())
    })
}

export default connect(mSTP, mDTP)(AskIndex)