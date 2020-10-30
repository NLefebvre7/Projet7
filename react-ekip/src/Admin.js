import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"
const apiUrl = `http://localhost:8080`;


class Admin extends Component {
    state = {
        users: []
    };

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
        <header className="">

<ul><li><a href="http://localhost:3000/MUser">Modify user</a></li>
<li><a href="http://localhost:3000/MDelete">Delete user</a></li>
</ul>
          <p>Liste des utilisateurs:</p>
          <ul>
            {this.state.users.map(user => (
              <li key={user}>id: {user._id}<br></br>
nom d'utilisateur: {user.username}<br></br>________


</li>
            ))}
       </ul> 


</header> </div>


    );
  }
}
export default Admin;
// class Admin extends Component {



// onSubmit(e) {
//   state = {
//         users: []
//     };

//     async loadUsers() {
//         const res = await axios.get(apiUrl + '/user/all');
//         this.setState({
//             users: res.data
//         });
//     }

//     componentDidMount() {
//         this.loadUsers();
//     }












// //      e.preventDefault()

        
// // const response = axios.get('http://localhost:8080/user/all')
// // .then(function (response) {
// //  const users = response.data;
// // console.log('Date created: ', users);
// // //console.log('Date created: ', response[0].data.created_at);


// //             }).catch((error) => {

// //                 console.log(error)
// //             });

//     }




//     render() {
//         return (
















// {/* <div className="wrapper">
//                 <form onSubmit={this.onSubmit}>

//                     <div className="form-group">
//                         <input type="submit" value="Get users" className="btn btn-success btn-block" />

//                     </div>
//                 </form>
//             </div>
//      */}
//         )
//     }
// }
// export default Admin;