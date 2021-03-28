import React, { Component } from "react";
import {
  Route,
  NavLink,
  Link,
  BrowserRouter
} from "react-router-dom";

import styled from 'styled-components'
  
import ReactParseExample from "./parse/reactParse";
import MyNavBar from "./MyNavBar";
import List from "./redux/components/list";
import Counter from "./redux/components/counter"

import { withAuthenticator, AmplifySignOut, AmplifyChatbot } from '@aws-amplify/ui-react'; 
class Home extends Component {
  render() {
    return (
      <div>
         {/* <MyNavBar /></p>*/}
        <section class="wrapper wrapper--intro">
        <div class="grid grid--centered grid--formatted centered">

          <h1 class="heading heading--xxx-large grid__item grid__item--large flush--bottom">Welcome to YinKin</h1>
          <p class="large">Happy <span data-day>day</span> from yinkin Ready to get started?</p>
          <p class="intro grid__item grid__item--small centered push--top push_double--bottom"></p>
            
          <div><p>Subscribe to get news</p></div>
          {/* <ReactParseExample /> */ }
        </div>
        <List />
        {/* <Counter /> */}
      </section>
      <AmplifyChatbot
    botName="BookTrip"
    botTitle="My ChatBot"
    welcomeMessage="Hello, how can I help you?"
  />
      <blockquote class="review">
            <p>“There were a lot of holes in our communication which led to elder-care are being missing or not done on time. 
              <span class="highlight highlight--dark">Tracking down tasks is impossible</span>”</p>
            <cite>Yinkin </cite>
          </blockquote>
      </div>
    );
  }
}
 
export default Home;