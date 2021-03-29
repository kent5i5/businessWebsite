import React, { Component } from "react";
import MyNavBar from "./MyNavBar";
import { withAuthenticator, AmplifySignOut ,AmplifyAuthenticator , AmplifyChatbot} from '@aws-amplify/ui-react';
class Support extends Component {
  render() {
    return (
      <div>
        
        {/* <h2>GOT QUESTIONS?</h2>
        <p>The easiest thing to do is post on
        our <a href="">forums</a>.
        </p> */}

        <AmplifyAuthenticator usernameAlias="email">
        <AmplifyChatbot
        botName="BookTrip"
        botTitle="Chat Bot Support"
        welcomeMessage="Hello, how can I help you?"
        //onComplete={handleComplete}
            clearOnComplete={true}
            conversationModeOn={false}
            voiceEnabled={true}
        />
    </ AmplifyAuthenticator>
      </div>
  
    );
  }
}
 
export default Support;