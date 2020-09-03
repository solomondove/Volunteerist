import React from 'react';
import { Link } from 'react-router-dom';

class AskIndexItem extends React.Component {


    render() {
        const { ask, clearAsk, updateAsk } = this.props
        if (!ask) {
            return null
        }
        return (
          <div>
            <p>Category: {ask.category}</p>
            <br />
            <p>Title: {ask.title}</p>
            <br />
            <p>Description: {ask.description}</p>
            <br />
            <p>Time Commitment: {ask.timeCommitment}</p>
            <br />
            <p>Deadline: {ask.deadline}</p>
            <br />
            <p>Time of Day: {ask.timeOfDay}</p>
            <br />
            {/* <p>Location: {[ask.location}</p>
            <br /> */}
            <Link to={`/ask/edit/${ask._id}`}>Edit Ask</Link>
          </div>
        );
    }
}

export default AskIndexItem