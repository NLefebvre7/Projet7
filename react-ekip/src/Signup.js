import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"

class Signup extends Component {
constructor(props) {
        super(props)

        this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: ''
        }
    }

    onChangeUserUsername(e) {
        this.setState({ username: e.target.value })
    }

    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('http://localhost:8080/user/signup', userObject)
            .then(function (response) {
alert("Account created, Click OK will redirect on Login page")
                window.location = "http://localhost:3000/Login";
            }).catch((error) => {
alert("username already taken")
                console.log(error)
            });

        this.setState({ username: '', password: '' })
    }


    render() {
        return (

            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom d'utilisateur</label>
                        <input type="text" value={this.state.username} onChange={this.onChangeUserUsername} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Mot de passe</label>
                        <input type="text" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Signup" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup;
// class Signup extends Component {
// //  const params = {
// //      username: 'test',
// //      password: 'test',
// // }

// // axios({
// //      method: 'post',
// //      url: 'http://localhost:8080/user/signup',
// //      data: params, 
// //      headers: {
// //       // 'Authorization': `bearer ${token}`,
// //      'Content-Type': 'application/json'
// //      }, 
// // }).then(function(response) {
// //           return response.json()
// //         }).then(function(body) {
// //           console.log(body);
// //         });z
    

//   render() {
//     return (
// <div>
//       Login<br /><br />
//       <div>
//         Username<br /><input type="text" autoComplete="new-password" /></div>

//       <div style={{ marginTop: 10 }}>

//         Password<br /><input type="password" autoComplete="new-password" /></div><br />
      
//       <input type="button" value="Login" /><br />

//     </div>
//     );
//   }
// }
 
// export default Signup;

// constructor(props){
//     super(props)
//     this.state = {
//       text: ""
//     }
//   }
// handleChange(){
//   this.setState({text: e.target.value})   
// }
  
// postContent(){
//   self = this 
//   axios.post("localhost:8080/user/signup", {
//     title: this.state.text
//   })
//   .then(function (response) {
//     self.deleteText()
//   })
// }
// deleteText(){
//   this.setState({text: ""})
// }