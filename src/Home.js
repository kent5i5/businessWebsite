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
class Home extends Component {
  render() {
    return (
      <div>
         <MyNavBar />
        <section class="wrapper wrapper--intro">
        <div class="grid grid--centered grid--formatted centered">

          <h1 class="heading heading--xxx-large grid__item grid__item--large flush--bottom">Welcome to YinKin</h1>
          <p class="large">Happy <span data-day>day</span> from yinkin Ready to get started?</p>
          <p class="intro grid__item grid__item--small centered push--top push_double--bottom">
            <Link to="/login" class="button button--primary button--huge" data-sign-in>Sign in to your account</Link></p>

          <div><p>Subscribe to get news</p></div>
          {/* <ReactParseExample /> */}
        </div>
        <List />
        {/* <Counter /> */}
      </section>

      </div>
    );
  }
}
 
export default Home;