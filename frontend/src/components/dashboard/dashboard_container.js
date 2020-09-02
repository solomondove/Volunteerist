import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { fetchAsks } from '../../actions/ask_actions';

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
    })
}

const mDTP = dispatch => {
    return ({
        fetchAsks: () => dispatch(fetchAsks())

    })
}

export default connect(mSTP, mDTP)(Dashboard)