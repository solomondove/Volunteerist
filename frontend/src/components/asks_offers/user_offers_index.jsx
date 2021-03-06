import React from "react";
import OfferIndexItem from "./offer_index_item";

class UserOffersIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUserOffers(this.props.currentUserId);
    this.props.fetchUser(this.props.currentUserId);
  }

  render() {
    if (!this.props.offers) {
      return null;
    }
    return (
      <div>
        <ul>
          {this.props.offers.map((offer) => (
            <OfferIndexItem
              key={offer._id}
              currentUser={this.props.currentUser}
              currentUserId={this.props.currentUserId}
              offer={offer}
              clearOffer={this.props.clearOffer}
              updateOffer={this.props.updateOffer}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserOffersIndex;
