import React from 'react';
import Comments from '../comments/offer_comments';
import AskMap from './ask_show_map_container';
import { Link } from 'react-router-dom';

class Offer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      postUser: null
    };
  }

  componentDidMount() {
    this.props.fetchOffer(this.props.offerId).then(result => {
      this.props.fetchUser(result.offer.data.posterId).then(result => this.setState({ postUser: result.user.data }))
    })
    this.props.fetchUser(this.props.currentUserId).then(result => this.setState({ currentUser: result.user.data }))
    this.props.fetchOfferComments(this.props.offerId);
  }

  render() {
    if (this.state.postUser && Array.isArray(this.props.comments)) {
      return (

        <div className="show-main">
          <div className="show-main-inner-div">

            <h1>{this.props.offer.title}</h1>
            <div className="show-second-header">
              <Link to={`/`} className="show-second-header-name">{this.state.postUser.firstName} {this.state.postUser.lastName}</Link>
              <div className="show-second-header-square">&#9642;</div>
              <div>{this.props.offer.category}</div>
            </div>

            <div className="show-main-background">

              <div className="show-info">
                <h2>Description:</h2>
                <div className="show-info-desc">{this.props.offer.description}</div>
                <h2 className="show-info-reqs">Requirements:</h2>
                <ul>
                  <li>Approximate time commitment (hrs): {this.props.offer.timeCommitment}</li>
                  <li>Time of day: {this.props.offer.timeOfDay}</li>
                </ul>
              </div>

              <div className="show-map">
                <AskMap location={this.props.offer.location} />
                <p>Address: {this.props.offer.address}</p>
              </div>

              <br />

            </div>

            <div className="show-comments-main">
              <h1>Comments</h1>
              <Comments
                addOfferComment={this.props.addOfferComment}
                offerId={this.props.offerId}
                currentUser={this.state.currentUser}
                comments={this.props.comments}
              />
            </div>

          </div>

        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }

  

}

export default Offer;