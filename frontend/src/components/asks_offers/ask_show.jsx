import React from 'react';
import Comments from '../comments/ask_comments';
import { Link } from 'react-router-dom';
import AskMap from './ask_show_map_container';

class Ask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      postUser: null
    };
    this.deleteAskClick = this.deleteAskClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchAsk(this.props.askId).then(result => {
      this.props.fetchUser(result.ask.data.posterId).then(result => this.setState({postUser: result.user.data}))
    })
    this.props.fetchUser(this.props.currentUserId).then(result => this.setState({currentUser: result.user.data}))
    this.props.fetchAskComments(this.props.askId);
  }

  deleteAskClick(e) {
    e.preventDefault();
    this.props.clearAsk(this.props.ask._id);
    this.props.history.push('/asks')

  }

  render() {
    if (!this.props.ask) return null;

    const completeButton = this.props.ask.hasVolunteer ? (
      <button><Link to={`/asks/completed/${this.props.ask._id}`}>Mark as complete</Link></button>
    ) : (
      null
    )

    const volunteerButton = !this.props.ask.hasVolunteer ? (
        <button onClick={() => this.props.fetchVolunteer(this.props.askId, this.props.currentUserId)}>
          I volunteer!
        </button>
    ) : (
        null
    )

    const volunteer = this.props.ask.hasVolunteer ? (
      <li>This ask has a volunteer!</li>
    ) : (
      null
    )

    const buttonMenu = this.props.currentUserId === this.props.posterId ? (
      <div className="show-edit-button-container">
        <Link to={`/asks/edit/${this.props.ask._id}`}>Edit Ask</Link>
        <button onClick={this.deleteAskClick}>Delete Ask</button>
        {completeButton}
        <Link to={`/asks`}>Back to all asks</Link>
      </div>
    ) : (
      <div className="show-edit-delete-container"> 
        <Link to={`/asks`}>Back to all asks</Link>
        {volunteerButton}
      </div>
    )

if (this.state.postUser && Array.isArray(this.props.comments)) {
      return (
        <div className="show-main">
          <div className="show-main-inner-div">

            <h1>{this.props.ask.title}</h1>
            <div className="show-second-header">
              <Link to={`/`} className="show-second-header-name">{this.state.postUser.firstName} {this.state.postUser.lastName}</Link>
              <div className="show-second-header-square">&#9642;</div> 
              <div>{this.props.ask.category}</div>
            </div>
            
            <div className="show-main-background">

              <div className="show-info">
                <h2>Description:</h2>
                <div className="show-info-desc">{this.props.ask.description}</div>
                <h2 className="show-info-reqs">Requirements:</h2>
                <ul>
                  <li>Approximate time commitment (hrs): {this.props.ask.timeCommitment}</li>
                  <li>{this.props.ask.deadline ? <div>Deadline: {this.props.ask.deadline.slice(5, 10)}-{this.props.ask.deadline.slice(0, 4)}</div> : "no set deadline"}</li>
                  <li>Time of day: {this.props.ask.timeOfDay}</li>
                  {volunteer}
                </ul>
                {buttonMenu}
              </div>

              <div className="show-map">
                <AskMap location={this.props.ask.location}/>
                <p>Address: {this.props.ask.address}</p>
              </div>

              <br/>

            </div>

            <div className="show-comments-main">
              <h1>Comments</h1>
              <Comments 
              addAskComment={this.props.addAskComment} 
              askId={this.props.askId} 
              currentUser={this.state.currentUser}
              comments={this.props.comments}
              />
            </div>

          </div>

        </div>
      )
    }  else {
      return (
        <div></div>
      )
    }
  }

}

export default Ask;