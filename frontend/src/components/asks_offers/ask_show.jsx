import React from 'react';
import Comments from '../comments/comments';

class Ask extends React.Component {

  componentDidMount() {
    this.props.fetchAsk(this.props.askId)
  }

  render() {
    // debugger
    if(this.props.currentUser) {
      return (
        <div>
          <h1>HIIII {this.props.currentUser.firstName}</h1>
          <Comments addAskComment={this.props.addAskComment} askId={this.props.askId} currentUser={this.props.currentUser}/>
        </div>
      )
    } 
  }

}

export default Ask;