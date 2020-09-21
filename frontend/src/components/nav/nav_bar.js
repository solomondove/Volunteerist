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
                    <div className="about-div" onClick={(e) => document.getElementById("about-modal").classList.add("show-modal")}>About</div>
                    <div id="about-modal" className="about-modal" onClick={(e) => document.getElementById("about-modal").classList.toggle("show-modal")}>
                        <div className="about-modal-content">
                            <h1>Welcome to Volunteerist</h1>
                            <p>
                                Volunteerist is a place to build local connections 
                                through community service! This site is geared towards 
                                connecting individuals and small organizations in need of 
                                help with people willing to volunteer their time within their neighborhood or city. 
                                These connections are built around the posting of ‘Asks’ and ‘Offers’. An Ask is 
                                posted by an individual in need of assistance with an errand, chore, or event. 
                                An Offer is presented by someone looking to utilize their specific skill set.
                            </p>
                            <h2>Create an Ask or Offer</h2> 
                            <p>
                                Upon login, you will be presented with an interactive map of all upcoming opportunities 
                                and easy access to each event's details. You can create Asks and Offers through the appropriate 
                                form and register an address for each to have it populated on the map. 
                            </p>   
                            <h2>Respond to an Ask or Offer</h2> 
                            <p>
                                By responding to an Ask as a volunteer, you have earmarked the opportunity for yourself, 
                                now is the time to coordinate. Live chat is offered through the event's page in order to 
                                make coordinating easier. Any pertinent details can be discussed here.
                            </p>
                            <h2>After the Event</h2>
                            <p>
                                After showing up and completing the requested work, the person who posted the opportunity 
                                has the chance to close out the item. Through the closing form, a short review of the 
                                volunteer is offered and the number of hours worked are logged. These hours are then added 
                                to the volunteer’s stats which can be found under the user Profile. 
                            </p>
                            <h2>Building Your Profile Stats</h2>
                            <p>
                                By completing tasks, your account gains accolades. For every 5 hours volunteered, you gain 
                                a level. Endorsements are based on the quality of your work at each event. A host must 
                                close the event ticket through a simple review form for the stats to be attributed to your 
                                profile. 
                            </p> 
                        </div>
                    </div>    
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
                    <div className="about-div-loggedout" onClick={(e) => document.getElementById("about-modal-loggedout").classList.add("show-modal")}>About</div>
                    <div id="about-modal-loggedout" className="about-modal-loggedout" onClick={(e) => document.getElementById("about-modal-loggedout").classList.toggle("show-modal")}>
                        <div className="about-modal-content">
                            <h1>Welcome to Volunteerist</h1>
                            <p>
                                Volunteerist is a place to build local connections 
                                through community service! This site is geared towards 
                                connecting individuals and small organizations in need of 
                                help with people willing to volunteer their time within their neighborhood or city. 
                                These connections are built around the posting of ‘Asks’ and ‘Offers’. An Ask is 
                                posted by an individual in need of assistance with an errand, chore, or event. 
                                An Offer is presented by someone looking to utilize their specific skill set.
                            </p>
                            <h2>Create an Ask or Offer</h2> 
                            <p>
                                Upon login, you will be presented with an interactive map of all upcoming opportunities 
                                and easy access to each event's details. You can create Asks and Offers through the appropriate 
                                form and register an address for each to have it populated on the map. 
                            </p>   
                            <h2>Respond to an Ask or Offer</h2> 
                            <p>
                                By responding to an Ask as a volunteer, you have earmarked the opportunity for yourself, 
                                now is the time to coordinate. Live chat is offered through the event's page in order to 
                                make coordinating easier. Any pertinent details can be discussed here.
                            </p>
                            <h2>After the Event</h2>
                            <p>
                                After showing up and completing the requested work, the person who posted the opportunity 
                                has the chance to close out the item. Through the closing form, a short review of the 
                                volunteer is offered and the number of hours worked are logged. These hours are then added 
                                to the volunteer’s stats which can be found under the user Profile. 
                            </p>
                            <h2>Building Your Profile Stats</h2>
                            <p>
                                By completing tasks, your account gains accolades. For every 5 hours volunteered, you gain 
                                a level. Endorsements are based on the quality of your work at each event. A host must 
                                close the event ticket through a simple review form for the stats to be attributed to your 
                                profile. 
                            </p> 
                        </div>
                        </div>
                        <Link to={"/signup"}>Signup</Link>
                        <Link to={"/login"}>Login</Link>
                    </div>
            );
        }
    }

    showModal() {

                    }

    render() {
        return (
            <div className="navbar">
                <div className='navbar-left'>
                    <Link to={"/"}><h1>Volunteerist</h1></Link>
                </div>
                {this.getLinks()}
            </div>
        );
    }
}

export default NavBar;
