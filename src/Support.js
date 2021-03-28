import React, { Component } from "react";
import MyNavBar from "./MyNavBar";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
class Support extends Component {
  render() {
    return (
      <div>
        
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="">forums</a>.
        </p>
      </div>
    );
  }
}
 
export default Support;