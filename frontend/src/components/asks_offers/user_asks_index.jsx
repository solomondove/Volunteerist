import React from "react";
import AskIndexItem from "./ask_index_item";

class UserAsksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserAsks(this.props.currentUserId);
    this.props.fetchUser(this.props.currentUserId);
  }

  render() {    
    if (!this.props.asks) {
      return null;
    }
    return (
      <div>
        <ul>
          {this.props.asks.map((ask) => (
            <AskIndexItem
              key={ask._id}
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

export default UserAsksIndex;
