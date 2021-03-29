import React, { Component } from "react";
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut,AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  Link,

} from "react-router-dom";

//class Login extends Component {
//function Login()  {
class Login extends Component {
  // const [authState, setAuthState] = React.useState();
  // const [user, setUser] = React.useState();

  // React.useEffect(() => {
  //     return onAuthUIStateChange((nextAuthState, authData) => {

  //         setAuthState(nextAuthState);
  //         setUser(authData)
  //     });
  // }, []);

render(){
    return (
    // authState === AuthState.SignedIn && user ? (
    //   <div>
      
    //       <div>Hello, {user.username}</div>
    //       {/* <p><Link to="/dashboard" class="button button--primary button--huge" >Dashboard</Link></p> */}
    //       <AmplifySignOut />
    //   </div>
    // ) :

      <div>
      
        {/* <AmplifyAuthenticator usernameAlias="email">
          <AmplifySignIn
            headerText="Yinkin - Sign In "
            slot="sign-in"
          ></AmplifySignIn>
        </AmplifyAuthenticator> */}
        {}
       
       
         <div class="" ><AmplifySignOut button-text="Logout"/></div>
      </div>

    );
  }
}
 
export default withAuthenticator(Login);