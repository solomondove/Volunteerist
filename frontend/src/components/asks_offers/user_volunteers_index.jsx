import React from "react";
import AskIndexItem from "./ask_index_item";

class UserVolunteersIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAsks();
        this.props.fetchUser(this.props.currentUserId);
    }

    render() {
        if (!this.props.asks) {
            return null;
        }
        return (
            <div>
                <ul className="ask-index-item-ul">
                    {this.props.asks.map((ask) => (
                        !ask.askCompleted && ask.volunteer === this.props.currentUserId? (
                            <AskIndexItem
                                key={ask._id}
                                currentUser={this.props.currentUser}
                                currentUserId={this.props.currentUserId}
                                ask={ask}
                                clearAsk={this.props.clearAsk}
                                updateAsk={this.props.updateAsk}
                            />)
                            : (
                                null
                            )
                    ))}
                </ul>
            </div>
        );
    }
}

export default UserVolunteersIndex;
