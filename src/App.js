import React from 'react';
import useState from 'react-dom';
import logo from './static/avatar/mobile-phone-2.png';
import './App.css';
import {
	  Route,
    NavLink,
    Link,
    HashRouter,
    BrowserRouter
	} from "react-router-dom";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Pricing from "./Pricing";
import Support from "./Support";
import Login from "./admin/Login";
import Register from "./admin/Register";
import D from "./admin/Dashboard";
import AuthButton from "./admin/AuthButton"
import Dashboard from './admin/Dashboard';
//import ReactParseExample from "./parse/reactParse";
import Mobile from './mobile';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);
function App() {
  

  return (
    
		  <BrowserRouter>
    <div className="App">
      <header className="App-header">
      </header>
        <div>
        
          
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/pricing" component={Pricing}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/mobile" component={Mobile} />
          <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </div>
        
        	
     

      <footer>
      <blockquote class="review">
            <p>“There were a lot of holes in our communication which led to elder-care are being missing or not done on time. 
              <span class="highlight highlight--dark">Tracking down tasks is impossible</span>”</p>
            <cite>Yinkin </cite>
          </blockquote>
          
          <p>Download our mobile app</p>
          <img src={logo} className="mobile-app-logo" alt="logo" />
          </footer>
    </div>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
