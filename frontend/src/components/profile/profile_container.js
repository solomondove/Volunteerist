import { connect } from "react-redux";
import Profile from "./profile";

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//     };
// };

export default connect(mapStateToProps, null)(Profile);
