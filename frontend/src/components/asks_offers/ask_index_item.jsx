import React from 'react';
import { Link } from 'react-router-dom';

class AskIndexItem extends React.Component {

    render() {
        const { ask, currentUserId } = this.props
        if (!ask) {
            return null
        }
        return (
            <div className='index-item'>
                <h3>ASK</h3>
                <br/>
                <p>Category: {ask.category}</p>
                <br />
                <p>Title: {ask.title}</p>
                <br />
                <p>Description: {ask.description}</p>
                <br />
                <p>Time Commitment: {ask.timeCommitment} hours</p>
                <br />
                <p>Deadline: {ask.deadline}</p>
                <br />
                <p>Time of Day: {ask.timeOfDay}</p>
                <br />
                {/* <p>Location: {[ask.location}</p>
                <br /> */}
                {ask.posterId === currentUserId ? 
                    <div className="edit-delete-container">
                        <button><Link to={`/asks/edit/${ask._id}`}>Edit Ask</Link></button>
                        <button onClick={() => this.props.clearAsk(ask._id)}>Delete Ask</button>
                        <button><Link to={`/asks/${ask._id}`}>Details</Link></button>
                    </div>
                    : 
                    <div className="edit-delete-container"> 
                        <button><Link to={`/asks/${ask._id}`}>Details</Link></button>
                    </div>
                }
          </div>
        );
    }
}

export default AskIndexItem