import React from "react";

class Profile extends React.Component {

    render() {
        const { currentUser } = this.props
        return (
            <div>
                <h2>{`Welcome ${currentUser.firstName} ${currentUser.lastName}.`}</h2>
            </div>
        );
    }
}   

export default Profile;
