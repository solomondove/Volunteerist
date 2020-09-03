import React from 'react';
import AskIndexItem from "./ask_index_item";

class AsksIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAsks();
        this.props.fetchUser(this.props.currentUserId);
    }

    render() {
        if (!this.props.asks) {
            return null
        }
        return (
            <div className="ask-index-container">
                <ul className="ask-index-ul">
                    {this.props.asks.map((ask) => (
                     !ask.hasVolunteer && !ask.askCompleted ? (
                        <AskIndexItem
                            key={ask._id}
                            currentUser={this.props.currentUser}
                            currentUserId={this.props.currentUserId}
                            ask={ask}
                            clearAsk={this.props.clearAsk}
                            updateAsk={this.props.updateAsk}
                            />
                     ) : (
                         null
                     )
                        ))}
                </ul>
            </div>
        );
    }
}

export default AsksIndex


