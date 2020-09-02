import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-asks">
                    <Link to={"/ask"}>Create an Ask</Link>
                    <Link to={"/offer"}>Create an Offer</Link>
                </div>
                <div>
                    <Link to={"/profile"}>Your Profile</Link>
                </div>
            </div>
        )
    }
}

export default Dashboard