import React from 'react';
import Comments from '../comments/offer_comments';
import AskMap from './ask_map_container';
import { Link, Redirect } from 'react-router-dom';

class Offer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      postUser: null,
      redirect: null
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchOffer(this.props.offerId).then(result => {
      this.props.fetchUser(result.offer.data.posterId).then(result => this.setState({ postUser: result.user.data }))
    })
    this.props.fetchUser(this.props.currentUserId).then(result => this.setState({ currentUser: result.user.data }))
    this.props.fetchOfferComments(this.props.offerId);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.clearOffer(this.props.offer._id);
    this.setState({redirect: '/offers'})
  }

  render() {
    if (!this.props.offer) return null;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const acceptButton = !this.props.offer.hasBeenAccepted ? (
        <button onClick={() => this.props.fetchAcceptor(this.props.offerId, this.props.currentUserId)}>
          Accept this Offer!
        </button>
    ) : (
        null
    )

    const acceptor = this.props.offer.hasBeenAccepted ? (
      <li>This offer has been accepted</li>
    ) : (
      null
    )

    const buttonsMenu = this.props.currentUserId === this.props.posterId ? (
      <div className="edit-delete-container">
        <button><Link to={`/offers/edit/${this.props.offer._id}`}>Edit Offer</Link></button>
        <button onClick={ this.handleClick }>Delete Offer</button>
        <button><Link to={`/offers`}>Back to all offers</Link></button>
      </div>
    ) : (
      <div className="edit-delete-container"> 
        {acceptButton}
        <button><Link to={`/offers`}>Back to all offers</Link></button>
      </div>
    )
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
                  {acceptor}
                </ul>
                {buttonsMenu}
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