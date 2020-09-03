import React from "react";
import UserAsksIndexContainer from "../asks_offers/user_asks_index_container";
import UserOffersIndexContainer from "../asks_offers/user_offers_index_container";

class Profile extends React.Component {
    componentDidMount() {
      this.props.fetchUser(this.props.currentUserId);
    }

    render() {
        const { currentUser } = this.props
        if (!currentUser) {
            return null
        }
        return (
          <div>
            <h2>{`Welcome ${currentUser.firstName} ${currentUser.lastName}.`}</h2>
            <div className="userAsks">
              <UserAsksIndexContainer />
            </div>
            <div className="userOffers">
              <UserOffersIndexContainer />
            </div>
          </div>
        );
    }
}   

export default Profile;
