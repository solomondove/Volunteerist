import React from 'react';
import AskIndexItem from "./ask_index_item";

class AsksIndex extends React.Component {

    render() {
        if (!this.props.asks) {
            return null
        }
        return (
            <div>
                <ul>
                    {this.props.asks.map((ask) => (
                        <AskIndexItem
                            key={ask.id}
                            currentUser={this.props.currentUser}
                            currentUserId={this.props.currentUserId}
                            ask={ask}
                            clearAsk={this.props.clearAsk}
                            updateAsk={this.props.updateAsk}
                        />
                        ))}
                </ul>
            </div>
        );
    }
}

export default AsksIndex


