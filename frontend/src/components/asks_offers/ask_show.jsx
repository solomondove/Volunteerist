import React from 'react';
import Comments from '../comments/comments';

class Ask extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.props.fetchAsk(this.props.askId);
    this.props.fetchAskComments(this.props.askId).then(comments => this.setState({ comments }))
  }

  render() {

    if(this.props.currentUser && Array.isArray(this.props.comments)) {
      // let comment_texts = this.props.comments.map((comment) => (comment.body))
      
      return (
        <div>
          <h1>HIIII {this.props.currentUser.firstName}</h1>
          <Comments 
          addAskComment={this.props.addAskComment} 
          askId={this.props.askId} 
          currentUser={this.props.currentUser}
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