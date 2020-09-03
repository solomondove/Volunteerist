import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPage from './main/main_page';
import ProfileContainer from './profile/profile_container';
import NavBarContainer from './nav/nav_bar_container';
import AskFormContainer from './asks_offers/ask_form_container';
import OfferFormContainer from './asks_offers/offer_form_container';
import DashboardContainer from './dashboard/dashboard_container';
import AskShowContainer from './asks_offers/ask_show_container';
import AsksIndexContainer from "./asks_offers/asks_index_container";
import OffersIndexContainer from "./asks_offers/offers_index_container";
import EditAskContainer from "./asks_offers/edit_ask_container";
import EditOfferContainer from "./asks_offers/edit_offer_container";

const App = () => (
    <div>
        <NavBarContainer /> 
        <Switch>
            
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

            <ProtectedRoute exact path="/profile" component={ProfileContainer} />
            <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
            <ProtectedRoute exact path="/asks" component={AsksIndexContainer} />
            <ProtectedRoute exact path="/asks/new" component={AskFormContainer} />
            <ProtectedRoute exact path="/offers" component={OffersIndexContainer} />
            <ProtectedRoute exact path="/offers/new" component={OfferFormContainer} />
            <ProtectedRoute exact path="/asks/edit/:ask_id" component={EditAskContainer} />
            <ProtectedRoute exact path="/offers/edit/:offer_id" component={EditOfferContainer} />
            <ProtectedRoute exact path="/asks/:ask_id" component={AskShowContainer} />
        </Switch>
    </div>
);

export default App;