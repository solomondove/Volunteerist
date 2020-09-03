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
            <div>
                <ul>
                    {this.props.asks.map((ask) => (
                        <AskIndexItem
                            key={Math.random()}
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


