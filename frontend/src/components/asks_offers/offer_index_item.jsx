import React from "react";
import { Link } from "react-router-dom";

class OfferIndexItem extends React.Component {
  render() {
    const { offer, currentUserId } = this.props;
    if (!offer) {
      return null;
    }
    const description = offer.description.length > 50 ? (
      offer.description.slice(0, 50).concat("...")
    ) : (offer.description)

    return (
      <div className="ask-index-item">
        <div>
          <h2 className="ask-header">OFFER</h2>
          <br />
          <h3 className="ai-category-header">Title</h3>
          <p clasName="index-title">{offer.title}</p>
          <br />
          <div className="sub-categories">
            <span>
              <h3 className="ai-category-header">Category:</h3>
              <p>{offer.category}</p>
              <br />
            </span>
            <span>
              <h3 className="ai-category-header">Time Offered:</h3>
              <p>{offer.timeCommitment ? offer.timeCommitment.toString().concat("hr") : "na" }</p>
              <br />
            </span>
            <span>
              <h3 className="ai-category-header">Time Of Day:</h3>
              <p>{offer.timeOfDay ? offer.timeOfDay : "na"}</p>
              <br />
            </span>
          </div>
          <h3 className="ai-category-header">Description</h3>
          <p className="description">{description}</p>
          <br />
          {offer.posterId === currentUserId ? (
            <div className='edit-delete-container'>
              <Link to={`/offers/edit/${offer._id}`} className="index-button">Edit Offer</Link>
              <button className="index-button" id="index-button" onClick={() => this.props.clearOffer(offer._id)}>Delete Offer</button>
              <Link to={`/offers/${offer._id}`} className="index-button">Details</Link>
            </div>
          ) : (
              <div className="edit-delete-container">
                <Link to={`/offers/${offer._id}`} className="index-button">Details</Link>
              </div>
          )}
        </div>
      </div>
    );
  }
}

export default OfferIndexItem;
