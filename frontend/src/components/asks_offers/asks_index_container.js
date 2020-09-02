import { fetchAsks } from '../../actions/ask_actions';
import { connect } from 'react-redux';
import AskIndex from './asks_index';

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id,
        asks: Object.values(state.entities.asks)
    })
}

const mDTP = dispatch => {
    return ({
        fetchAsks: () => dispatch(fetchAsks())
    })
}

export default connect(mSTP, mDTP)(AskIndex)