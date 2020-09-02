import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'; 
import Root from './components/root'; 
import jwt_decode from 'jwt-decode'; 
import { setAuthToken } from './util/session_api_util'; 
import { logout } from './actions/session_actions'; 


document.addEventListener('DOMContentLoaded', () => {
  let store;

  // If a returning user has a session token stored in localStorage
  if (localStorage.jwtToken) {

    // Set the token as a common header for all axios requests
    setAuthToken(localStorage.jwtToken);

    // Decode the token to obtain the user's information
    const decodedUser = jwt_decode(localStorage.jwtToken);

    // Create a preconfigured state we can immediately add to our store
    const preloadedState = { session: { isAuthenticated: true, id: decodedUser._id } };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    // If the user's token has expired
    if (decodedUser.exp < currentTime) {
      // Logout the user and redirect to the login page
      store.dispatch(logout());
      window.location.href = '/login';
    }
  } else {
    // If this is a first time user, start with an empty store
    store = configureStore({});
  }


  window.getState = store.getState;
  // Render our root component and pass in the store as a prop
  const root = document.getElementById('root');



  ReactDOM.render(<Root store={store} />, root);
});