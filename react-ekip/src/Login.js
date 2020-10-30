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
const response = axios.post('http://localhost:8080/user/login', userObject)
.then(function (response) {
console.log(response.data.token)
                const token = response.data.token;

              axios.defaults.headers.common["Authorization"] = "Bearer " + token;
           alert("Your token : \n" + token + "\n Click OK will redirect on Project page")
window.location = "http://localhost:3000/Projects";
//history.push("/admin");
            }).catch((error) => {

alert("Identifiants incorrect")
                console.log(error)
            });

        this.setState({ username: '', password: '' ,token: 'Voici votre token : '+this.token})
    }


//res.data.token
    // onSubmit(e) {
    //     e.preventDefault()

    //     const userObject = {
    //         username: this.state.username,
    //         password: this.state.password
    //     };

    //     axios.post('http://localhost:8080/user/login', userObject)
    //         .then(function (response) {
    //             //dispatch(loginSuccess(res.data));
    //             const token = res.data.token;
    //             axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    //           // history.push("/");
    //         }).catch((error) => {
    //             console.log(error)
    //         });

    //     this.setState({ username: '', password: '' })
    // }


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
                        <input type="submit" value="Login" className="btn btn-success btn-block" />
<p><br></br></p>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup;