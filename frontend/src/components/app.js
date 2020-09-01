import React from "react";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router-dom";

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MainPage from './main/main_page';
import AskMapContainer from './asks/ask_map_container'; 

const App = () => (
    <div>
        <Switch>
            <AuthRoute exact path="/askmap" component={AskMapContainer} /> 
            <AuthRoute exact path="/" component={MainPage} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;