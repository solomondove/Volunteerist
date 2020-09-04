import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    // Selectively render links dependent on whether the user is logged in
    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div className="navbar-right">
                    <div className="navbar-trigger-volunteer">
                        <div className="navbar-label-volunteer">Volunteer</div>
                        <ul className="navbar-dropdown-volunteer">
                            <Link to={"/offers/new"}>Create Offer</Link>
                            <Link to={"/asks"}>All Asks</Link>
                        </ul>
                    </div>
                    <div className="navbar-trigger-ask">
                        <div className="navbar-label-ask">Request</div>
                        <ul className="navbar-dropdown-volunteer">
                            <Link to={"/asks/new"}>Create Ask</Link>
                            <Link to={"/offers"}>All Offers</Link>
                        </ul>
                    </div>
                    <div className="navbar-trigger-dashboard">
                        <div className="navbar-label-dashboard">Account</div>
                        <ul className="navbar-dropdown-dashboard">
                            <Link to={"/dashboard"}>Dashboard</Link>
                            <Link to={"/profile"}>Profile</Link>
                            <button onClick={this.logoutUser}>Logout</button>
                        </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='navbar-right'>
                    <Link to={"/signup"}>Signup</Link>
                    <Link to={"/login"}>Login</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="navbar">
                <Link to={"/"}><h1>Volunteerist</h1></Link>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;
