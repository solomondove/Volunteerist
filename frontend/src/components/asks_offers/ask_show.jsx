import React from 'react';
import Comments from '../comments/comments';
import { Link } from 'react-router-dom';

class Ask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      postUser: null
    };
  }

  componentDidMount() {
    this.props.fetchAsk(this.props.askId).then(result => {
      this.props.fetchUser(result.ask.data.posterId).then(result => this.setState({postUser: result.user.data}))
    })
    this.props.fetchUser(this.props.currentUserId).then(result => this.setState({currentUser: result.user.data}))
    this.props.fetchAskComments(this.props.askId);
  }

  render() {
    if (!this.props.ask) return null;

    const volunteerButton = !this.props.ask.hasVolunteer ? (
        <button onClick={() => this.props.fetchVolunteer(this.props.askId, this.props.currentUserId)}>
          I volunteer!
        </button>
    ) : (
        null
    )

    const volunteer = this.props.currentUserId === this.props.posterId ? (
      <div className="edit-delete-container">
        <button><Link to={`/asks/edit/${this.props.ask._id}`}>Edit Ask</Link></button>
        <button onClick={() => this.props.clearAsk(this.props.ask._id)}>Delete Ask</button>
        <button><Link to={`/asks`}>Back to all asks</Link></button>
      </div>
    ) : (
      <div className="edit-delete-container"> 
        {volunteerButton}
        <button><Link to={`/asks`}>Back to all asks</Link></button>
      </div>
    )

if (this.state.postUser && Array.isArray(this.props.comments)) {
      return (
        <div>

          <div>
            <div>Title: {this.props.ask.title}</div>
            <div>Posted by: {this.state.postUser.firstName} {this.state.postUser.lastName}</div>
            <div>Category: {this.props.ask.category}</div>
            <div>Description: {this.props.ask.description}</div>
            <div>Approximate time commitment (hrs): {this.props.ask.timeCommitment}</div>
            {this.props.ask.deadline ? <div>Deadline: {this.props.ask.deadline.slice(5, 10)}-{this.props.ask.deadline.slice(0, 4)}</div> : null}
            <div>Time of day: {this.props.ask.timeOfDay}</div>
            {volunteer}
          </div>

          <br/>
          <div>
            <h1>Comments</h1>
            <h2>-----HIIII {this.state.currentUser.firstName}-----</h2>
            <Comments 
            addAskComment={this.props.addAskComment} 
            askId={this.props.askId} 
            currentUser={this.state.currentUser}
            comments={this.props.comments}
            />
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