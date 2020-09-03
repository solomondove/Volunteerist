import React from 'react';
import Comments from '../comments/comments';

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
    if(this.state.postUser && Array.isArray(this.props.comments)) {
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