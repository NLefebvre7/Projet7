import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {
    Route,
    NavLink,
    HashRouter,
    BrowserRouter,
    Switch
} from "react-router-dom";
import { Link } from 'react-router-dom';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

import Home from "./Home";
import Signup from './Signup';
//import Naviguation from './Naviguation';
import Login from './Login';
import Projects from './Projects';
import Admin from './Admin';
import Room from './Room';
import ListTeam from './Team';
import Team from './CreateTeam';
import Userteam from './Userteam';
import MUser from './MUser';
import MDelete from './MDelete';
import DTeam from './DTeam';
import MProject from './MProject';
import DProject from './DProjects';

const apiUrl = `http://localhost:8080`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
<Navbar bg="dark" variant="dark">
            <NavLink exact activeClassName="active" to="/">Home</NavLink><small>  | </small>
 <NavLink activeClassName="active" to="/Signup">Signup</NavLink><small>   |   </small>
            <NavLink activeClassName="active" to="/Login">Login</NavLink><small>  | </small>

          
<NavLink activeClassName="active" to="/Projects">Projects</NavLink><small>   |     </small>
<NavLink activeClassName="active" to="/Room">ListProjects</NavLink><small>   |   </small>
<NavLink activeClassName="active" to="/MProject">Manage Project</NavLink><small>    |  </small>
</Navbar>



<NavLink activeClassName="active" to="/Team">Team</NavLink><small>    |  </small>
<NavLink activeClassName="active" to="/LTeam">ListTeam</NavLink><small>    |  </small>
<NavLink activeClassName="active" to="/UserTeam">Manage Teams</NavLink><small>    |  </small>

  <NavLink activeClassName="active" to="/Admin">Admin</NavLink><small>    |  </small>

          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Login" component={Login} />

<Route path="/Admin" component={Admin} />
<Route path="/Projects" component={Projects} />
<Route path="/Room" component={Room} />
<Route path="/LTeam" component={ListTeam} />
<Route path="/Team" component={Team} />
<Route path="/UserTeam" component={Userteam} />
<Route path="/MUser" component={MUser} />
<Route path="/MDelete" component={MDelete} />
<Route path="/DTeam" component={DTeam} />
<Route path="/MProject" component={MProject} />
<Route path="/DProject" component={DProject} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
 
export default App;









// state = {
//         users: []
//     };

//     async createUser() {
//         await axios.get(apiUrl + '/user/signup');
//         this.loadUsers();
//     }

//     async loadUsers() {
//         const res = await axios.get(apiUrl + '/user/all');
//         this.setState({
//             users: res.data
//         });
//     }

//     componentDidMount() {
//         this.loadUsers();
//     }  

 
//     return (
//   <BrowserRouter>
//         <div>
//           <Naviguation />
//             <Switch>

//            <Route path="/" component={Home} exact/>
//             <Route path="/Somepage" component={Somepage} />
//             <Route path="/Login" component={Login} />
//            </Switch>
//         </div> 
//       </BrowserRouter>
//     );


//FICHIER DE BASE:
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;