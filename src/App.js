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
import { withAuthenticator, AmplifySignOut, AmplifyChatbot } from '@aws-amplify/ui-react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Pricing from "./Pricing";
import Support from "./Support";
import Login from "./admin/Login";
import Register from "./admin/Register";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import Dashboard from './admin/Dashboard';
//import ReactParseExample from "./parse/reactParse";
import Mobile from './mobile';
import MyNavBar from "./MyNavBar";
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);


function App() {
  
  
  const handleChatComplete = (event) => {
    const {data, err} = event.detail;
    if (data) console.log("Chat fulfilled!", JSON.stringify(data));
    if (err) console.error("Chat failed:", err);
  };

  React.useEffect(() => {
    const chatbotElement = document.querySelector("amplify-chatbot");
    chatbotElement.addEventListener("chatCompleted", handleChatComplete);
    return function cleanup() {
      chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
    };
  }, []);
  return (
    
		  <BrowserRouter>
    <div className="App">
      <header className="App-header"> 
      <MyNavBar />
      </header>
        <div>
        
          
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/index.html" component={Home}/>
          <Route exact path="/pricing" component={Pricing}/>
          <Route exact path="/support" component={Support}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/mobile" component={Mobile} />
          <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </div>
        
        	
     

      <footer class="myFooter">
        <ul>
          <li> <Link to="/support" >support</Link></li>
       <li><Link to="/mobile" >mobile</Link></li>
       <li> <Link to="/pricing" >pricing</Link></li>
       <li> <Link to="/" >home</Link></li>

        </ul>
    
          </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
//export default withAuthenticator(App);
