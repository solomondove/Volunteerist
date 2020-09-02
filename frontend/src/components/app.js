import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPage from './main/main_page';
import AskMapContainer from './asks_offers/ask_map_container'; 
import ProfileContainer from './profile/profile_container';
import NavBarContainer from './nav/nav_bar_container';
import AskFormContainer from './asks_offers/ask_form_container';
import OfferFormContainer from './asks_offers/offer_form_container';
import DashboardContainer from './dashboard/dashboard_container';


const App = () => (
    <div>
        <NavBarContainer />
        <Switch>
            <AuthRoute exact path="/askmap" component={AskMapContainer} /> 
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
            <ProtectedRoute exact path="/ask" component={AskFormContainer} />
            <ProtectedRoute exact path="/offer" component={OfferFormContainer} />
        </Switch>

    </div>
);

export default App;