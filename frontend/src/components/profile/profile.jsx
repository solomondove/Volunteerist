import React from "react";
import UserAsksIndexContainer from "../asks_offers/user_asks_index_container";
import UserOffersIndexContainer from "../asks_offers/user_offers_index_container";
import { FaUser } from 'react-icons/fa';

class Profile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        currentShow: 'ask'
      }
    }

    componentDidMount() {
      this.props.fetchUser(this.props.currentUserId);
    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) {
            return null
        }
        return (
          <div className="profile-main">

            <div className="profile-lhs">
              <div className="profile-lhs-fixed">

                <div className="profile-header-background">
                  <div className="profile-header-circle">
                    <FaUser />
                  </div>
                </div>

                <h2><span>{currentUser.firstName} {currentUser.lastName}</span></h2>
                <div className="profile-email">{currentUser.email}</div>
                <div className="profile-gender">{currentUser.gender}</div>

                <div className="profile-totals">
                  <h1>TOTALS</h1>
                </div>

              </div>
            </div>

            <div className="profile-rhs">

              <div>
                <select value={this.state.currentShow} onChange={(event) => this.setState({currentShow: event.currentTarget.value})}>
                  <option value="ask">My Asks</option>
                  <option value="offer">My Offers</option>
                </select>
              </div>

              <div className="profile-owned-items">
                { this.state.currentShow === "ask" ? 
                  <div className="userAsks">
                    <UserAsksIndexContainer />
                  </div> :
                  <div className="userOffers">
                    <UserOffersIndexContainer />
                  </div>
                }
              </div>

            </div>

          </div>
        );
    }
}   

export default Profile;
