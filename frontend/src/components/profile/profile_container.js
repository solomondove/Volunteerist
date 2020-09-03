import { connect } from "react-redux";
import Profile from "./profile";
import { fetchUser } from "../../actions/user_actions";

const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        currentUserId: state.session.id
    };
};

const mDTP = (dispatch) => {
    return {
        fetchUser: userId => dispatch(fetchUser(userId))
    };
};

export default connect(mSTP, mDTP)(Profile);
