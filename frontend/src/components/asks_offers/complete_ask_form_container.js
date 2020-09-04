import { fetchUser } from "../../actions/user_actions";
import { withRouter } from "react-router-dom";
import CompleteAskForm from "./complete_ask_form";
import { completeAsk, fetchAsk } from "../../actions/ask_actions";
import { connect } from "react-redux";
import { addStats } from "../../actions/user_actions";

export const mSTP = (state, ownProps) => {
    let volunteerId
    let ask = state.entities.asks[ownProps.match.params.ask_id]
    if (ask) {
        volunteerId = ask.volunteer
    }
    return ({
        askId: ownProps.match.params.ask_id,
        ask: ask,
        volunteer: state.entities.users[volunteerId]
    })
}

export const mDTP = dispatch => {
    return ({
        fetchUser: userId => dispatch(fetchUser(userId)),
        completeAsk: askId => dispatch(completeAsk(askId)),
        fetchAsk: askId => dispatch(fetchAsk(askId)),
        addStats: (userId, newStats) => dispatch(addStats(userId, newStats))

    })
}

export default withRouter(connect(mSTP, mDTP)(CompleteAskForm))