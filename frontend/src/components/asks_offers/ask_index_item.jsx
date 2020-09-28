import React from 'react';
import { Link } from 'react-router-dom';

class AskIndexItem extends React.Component {

    render() {
        const { ask, currentUserId } = this.props
        if (!ask) {
            return null
        }

        const title = ask.title.length > 30 ? (
            ask.title.slice(0, 30).concat("...")
        ) : (ask.title)

        const description = ask.description.length > 50 ? (
            ask.description.slice(0, 50).concat("...") 
        ) : ( ask.description )

        return (
            <div className="ask-index-item">
                <div>

                    <h2 className="ask-header">ASK</h2>
                    <br />
                    <h3 className="ai-category-header">Title:</h3>
                    <p className="index-title">{title}</p>
                    <br/>
                    <div className="sub-categories">
                        <span>
                            <h3 className="ai-category-header">Category:</h3>
                            <p>{ask.category}</p>
                        <br />
                        </span>
                        <span>
                            <h3 className="ai-category-header">Time Est.:</h3>
                            <p>{ask.timeCommitment ? ask.timeCommitment.toString().concat("hr") : "na"}</p>
                            <br />
                        </span>
                        <span>
                            <h3 className="ai-category-header">Time of Day:</h3>
                            <p>{ask.timeOfDay ? ask.timeOfDay : "na"}</p>
                            <br />
                        </span>
                    </div> 
                    <h3 className="ai-category-header">Description:</h3>
                    <p className="description">{description}</p>
                    <br />
                    {ask.posterId === currentUserId ? 
                        <div className="edit-delete-container">
                            <Link to={`/asks/edit/${ask._id}`} className="index-button">Edit</Link>
                            <button className="index-button" id="index-button" onClick={() => this.props.clearAsk(ask._id)}>Delete</button>
                            <Link to={`/asks/${ask._id}`} className="index-button">Details</Link>
                        </div>
                        : 
                        <div className="edit-delete-container"> 
                            <Link to={`/asks/${ask._id}`} className="index-button">Details</Link>
                        </div>
                    }
                </div>
            </div>
          
         
        );
    }
}

export default AskIndexItem