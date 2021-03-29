import React, { Component } from "react";

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
class Register extends Component {
  render() {
    return (
      <div>
        <p>Forum</p>
      </div>
    );
  }
}
 
export default withAuthenticator(Register);