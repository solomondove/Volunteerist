import React from 'react';

class Ask extends React.Component {

  componentDidMount() {
    this.props.fetchAsk(this.props.askId)
  }

  render() {
    return (
      <div>hi</div>
    )
  }

}

export default Ask;