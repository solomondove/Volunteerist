import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component {
    

    componentDidMount() {
        this.props.fetchAsks()
    }


    render() {
        if (!this.props.currentUser) {
            return null
        }
        return (
          <div className="dashboard">
            <div className="dashboard-asks">
              <Link to={"/asks/new"}>Create an Ask</Link>
              <Link to={"/offers/new"}>Create an Offer</Link>
            </div>
            <div>
              <Link to={"/profile"}>Your Profile</Link>
            </div>
          </div>
        );
    }
}

export default Dashboard