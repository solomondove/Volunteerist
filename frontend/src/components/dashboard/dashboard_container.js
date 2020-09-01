import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mSTP = state => {
    return ({
        currentUser: state.entities.users[state.session.id],
    })
}

// const mDTP = dispatch => {
//     return ({

//     })
// }

export default connect(mSTP, null)(Dashboard)