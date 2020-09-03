import React from "react";
import { Link } from "react-router-dom";

class OfferIndexItem extends React.Component {
  render() {
    const { offer, currentUserId } = this.props;
    if (!offer) {
      return null;
    }
    return (
      <div>
        <h3>OFFER</h3>
        <br />
        <p>Category: {offer.category}</p>
        <br />
        <p>Title: {offer.title}</p>
        <br />
        <p>Description: {offer.description}</p>
        <br />
        <p>Time Commitment: {offer.timeCommitment} hours</p>
        <br />
        <p>Deadline: {offer.deadline}</p>
        <br />
        <p>Time of Day: {offer.timeOfDay}</p>
        <br />
        {/* <p>Location: {[offer.location}</p>
            <br /> */}
        {offer.posterId === currentUserId ? (
          <Link to={`/offers/edit/${offer._id}`}>Edit Offer</Link>
        ) : null}
      </div>
    );
  }
}

export default OfferIndexItem;
