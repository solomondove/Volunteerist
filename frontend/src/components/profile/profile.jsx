import React from "react";
import UserAsksIndexContainer from "../asks_offers/user_asks_index_container";
import UserOffersIndexContainer from "../asks_offers/user_offers_index_container";
import UserVolunteersIndexContainer from "../asks_offers/user_volunteers_index_container";
import { FaUser } from 'react-icons/fa';

class Profile extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        currentShow: 'ask'
      }
      this.indexType = this.indexType.bind(this)
    }

    indexType() {
      if (this.state.currentShow === 'ask') {
        return <UserAsksIndexContainer />
      } else if (this.state.currentShow === 'offer') {
        return <UserOffersIndexContainer />
      } else if (this.state.currentShow === 'volunteer') {
        return <UserVolunteersIndexContainer />
      }
    }

    componentDidMount() {
      this.props.fetchUser(this.props.currentUserId);
    }

    getLevel() {
      return Math.floor(this.props.currentUser.stats.hrsCompleted / 5)
    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) {
            return null
        }
        let levelBar = { '--level-hrs': (this.props.currentUser.stats.hrsCompleted % 5), '--level-goal': 5 }
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
                  <h1>YOUR STATS</h1>
                  <div className="profile-outer-level">
                    <div className="profile-level">Level {this.getLevel()}:</div>
                    <div className="profile-level-bar">
                      <div style={levelBar} className="profile-level-bar-fill"></div>
                    </div>
                  </div>
                  <div className="stats-outer-level">
                    <ul>
                      <li className="stats-list">
                        {`Endorsements: ${currentUser.stats.satisfied + currentUser.stats.verySatisfied}`}
                      </li> 
                      <li className="stats-list">
                        {`Hours Voluntered: ${currentUser.stats.hrsCompleted}`}
                      </li>
                      <li className="stats-list">
                        {`Asks Completed: ${currentUser.stats.asksCompleted}`}
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            <div className="profile-rhs">

              <div>
                <select value={this.state.currentShow} onChange={(event) => this.setState({currentShow: event.currentTarget.value})}>
                  <option value="ask">My Asks</option>
                  <option value="offer">My Offers</option>
                  <option value="volunteer">Asks Volunteered</option>
                </select>
              </div>

              <div className="profile-owned-items">
                {this.indexType()}
              </div>

            </div>

          </div>
        );
    }
}   

export default Profile;
