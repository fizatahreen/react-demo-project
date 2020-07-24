import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";

import Aboutme from "./Aboutme";
import Auto1 from "./Auto1";
import "./index.scss";

 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/Aboutme">About me</NavLink></li>
              <li><NavLink to="/Auto1">Auto complete demo</NavLink></li>

            </ul>
            <div className="content">
              <Route exact path="/" component={Home}/>
            

              <Route path="/Aboutme" component={Aboutme}/>
              <Route path="/Auto1" component={Auto1}/>

            </div>
          </div>
        </HashRouter>
      );
    }
  }
export default Main;