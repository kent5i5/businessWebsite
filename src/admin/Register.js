import React, { Component } from "react";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
class Register extends Component {
  render() {
    return (
      <div>
        <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is to register to 
        our  service <a href="">Or Login in</a>.
        </p>
      </div>
    );
  }
}
 
export default withAuthenticator(Register);