import React from "react";
import OfferIndexItem from "./offer_index_item";

class AsksIndex extends React.Component {
  componentDidMount() {
    this.props.fetchOffers();
    this.props.fetchUser(this.props.currentUserId);
  }

  render() {
    if (!this.props.offers) {
      return null;
    }
    return (
      <div>
        <ul>
          {this.props.offers.map((offer, i) => (
            <OfferIndexItem
              key={offer._id}
              currentUser={this.props.currentUser}
              currentUserId={this.props.currentUserId}
              offer={offer}
              clearOffer={this.props.clearOffer}
              updateOffer={this.props.updateOffer}
              fetchAcceptor={this.props.fetchAcceptor}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default AsksIndex;
