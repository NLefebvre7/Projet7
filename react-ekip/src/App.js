import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
const apiUrl = `http://localhost:8080`;

class App extends Component {
    state = {
        users: []
    };

    async createUser() {
        await axios.get(apiUrl + '/user/signup');
        this.loadUsers();
    }

    async loadUsers() {
        const res = await axios.get(apiUrl + '/user/all');
        this.setState({
            users: res.data
        });
    }

    componentDidMount() {
        this.loadUsers();
    }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.createUser()}>Create User</button>
          <p>Users list777:</p>
          <ul>
            {this.state.users.map(user => (
              <li key={user._id}>id: {user._id}</li>
            ))}
       </ul> </header> </div>


    );
  }
}
export default App;
















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