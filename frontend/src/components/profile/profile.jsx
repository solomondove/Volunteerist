import React from "react";
import UserAsksIndexContainer from "../asks_offers/user_asks_index_container"

class Profile extends React.Component {

    

    render() {
        const { currentUser } = this.props
        if (!currentUser) {
            return null
        }
        return (
            <div>
                <h2>{`Welcome ${currentUser.firstName} ${currentUser.lastName}.`}</h2>
                <UserAsksIndexContainer />
            </div>
        );
    }
}   

export default Profile;
