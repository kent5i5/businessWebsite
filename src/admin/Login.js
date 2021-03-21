import React, { Component } from "react";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {
  Link,

} from "react-router-dom";
class Login extends Component {

   
   


    render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>Start to make better care of elder<a href="">Or Register</a>.
        </p>
        <p><Link to="/dashboard" class="button button--primary button--huge" >Dashboard</Link></p>
        <AmplifySignOut />
      </div>

    );
  }
}
 
export default withAuthenticator(Login);