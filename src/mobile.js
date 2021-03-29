import React, { Component } from "react";
import homeImage from "./static//home_small.png"
import loginImage from "./static/login.png"
import searchImage from "./static/search_worker.png"
import logo from './static/avatar/mobile-phone-2.png';
class Mobile extends Component {
  render() {
    return (
      <div>
        <h2>Android App </h2>
        <p>APP picture:</p>

        {/* <img src={homeImage} className="home-image" style={{marginLeft: "1em"}} alt="lgoin" />
 
        <img src={loginImage} className="login-image" style={{marginLeft: "1em"}}alt="home" />
       
        <img src={searchImage} className="search-image"style={{marginLeft: "1em"}} alt="search" />
                 
        <p>Download our mobile app</p> */}
          <img src={logo} className="mobile-app-logo" alt="logo" />
      </div>
    );
  }
}
 
export default Mobile;