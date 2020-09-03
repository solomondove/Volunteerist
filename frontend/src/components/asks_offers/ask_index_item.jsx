import React from 'react';
import { Link } from 'react-router-dom';

class AskIndexItem extends React.Component {

    render() {
        const { ask, currentUserId } = this.props
        if (!ask) {
            return null
        }
        const description = ask.description.length > 50 ? (
            ask.description.slice(0, 50).concat("...") 
        ) : ( ask.description )

        return (
            <div className="ask-index-item">
                <div>

                    <h2 className="ask-header">ASK</h2>
                    <br />
                    <h3 className="ai-category-header">Title:</h3>
                    <p className="index-title">{ask.title}</p>
                    <br/>
                    <div className="sub-categories">
                        <span>
                            <h3 className="ai-category-header">Category: </h3>
                            <p>{ask.category}</p>
                        <br />
                        </span>
                        <span>
                            <h3 className="ai-category-header"> Time Est.:</h3>
                            <p>{ask.timeCommitment} <span className="index-hours">hour(s)</span></p>
                            <br />
                        </span>
                        <span>
                            <h3 className="ai-category-header">Time of Day:</h3>
                            <p>{ask.timeOfDay}</p>
                            <br />
                        </span>
                    </div> 
                    <h3 className="ai-category-header">Description:</h3>
                    <p>{description}</p>
                    <br />
                    <div className="index-buttons">
                        <a className="index-button">See Details</a>  
                        {ask.posterId === currentUserId ? 
                            <Link to={`/asks/edit/${ask._id}`} className="index-button">Edit Ask</Link>
                            : 
                            null}
                        </div>
                    </div>
            </div>
        );
    }
}

export default AskIndexItem