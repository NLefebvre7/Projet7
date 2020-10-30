import React from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    BrowserRouter,
    Switch
} from "react-router-dom";


/**
 * Import all page components here
 */
import App from './App';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Projects from './Projects';
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (

  <Route path="/" component={App}>

    <Route path="/Signup" component={Signup} />
    <Route path="/Home" component={Home} />
    <Route path="/Login" component={Login} />
<Route path="/Projects" component={Projects} />
  </Route>

);