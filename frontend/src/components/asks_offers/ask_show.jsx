import React from 'react';
import Comments from '../comments/comments';

class Ask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      currentUser: null
    };
  }

  componentDidMount() {
    this.props.fetchAsk(this.props.askId);
    this.props.fetchUser(this.props.currentUserId).then(currentUser => this.setState({currentUser}))
    this.props.fetchAskComments(this.props.askId).then(comments => this.setState({ comments }))
  }

  render() {
    if(this.state.currentUser && Array.isArray(this.props.comments)) {

      return (
        <div>
          <h1>HIIII {this.state.currentUser.firstName}</h1>
          <Comments 
          addAskComment={this.props.addAskComment} 
          askId={this.props.askId} 
          currentUser={this.state.currentUser.user.data}
          comments={this.props.comments}
          />
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