import React from 'react';
import { Link } from "react-router-dom";
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut,AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

function MyNavBar() {
    return (
        <div>
        {AuthState === AuthState.SignedIn &&
         <div class="Signout" ><AmplifySignOut button-text="Logout"/></div>}
           <h1>YinKin Business Analysis</h1> 
        <ul className="header">
          <li><Link exact to="/">Home</Link></li>
          <li><Link exact to="/dashboard">Dashboard</Link></li>
          <li><Link exact to="/pricing">Pricing</Link></li>
          <li><Link exact to="/support">Support</Link></li>
          <li><Link exact to="/mobile">Mobile Apps</Link></li>
          
          <li><Link to="/login" class="button button--primary button--huge" data-sign-in>Sign in</Link>
          </li>
          </ul>
          
          </div>
    );
}

export default MyNavBar;