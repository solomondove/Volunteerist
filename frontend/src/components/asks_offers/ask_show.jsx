import React from 'react';

class Ask extends React.Component {

  componentDidMount() {
    this.props.fetchAsk(this.props.askId)
  }

  render() {
    return (
      <Comments askId={this.props.askId}/>
    )
  }

}

export default Ask;