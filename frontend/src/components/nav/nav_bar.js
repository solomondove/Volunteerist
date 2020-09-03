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
                    <Link to={"/profile"}>Profile</Link>
                    <Link to={"/asks/new"}>Create Ask</Link>
                    <Link to={"/offers/new"}>Create Offer</Link>
                    <Link to={"/asks"}>All Asks</Link>
                    <Link to={"/offers"}>All Offers</Link>
                    <button onClick={this.logoutUser}>Logout</button>
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
                <h1>Volunteerist</h1>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;
