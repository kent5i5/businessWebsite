import React from 'react';
import { Link } from "react-router-dom";
function MyNavBar() {
    return (
        <div>
        <h1>YinKin Business Analysis</h1>
        <ul className="header">
          <li><Link exact to="/">Home</Link></li>
          <li><Link exact to="/dashboard">Dashboard</Link></li>
          <li><Link exact to="/pricing">Pricing</Link></li>
          <li><Link exact to="/support">Support</Link></li>
          <li><Link exact to="/mobile">Mobile Apps</Link></li>
          
          </ul>
          </div>
    );
}

export default MyNavBar;