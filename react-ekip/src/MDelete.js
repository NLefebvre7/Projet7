import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"
const apiUrl = `http://localhost:8080`;


class MDelete extends Component {
  constructor(props) {
        super(props)




this.onChangeUserId = this.onChangeUserId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

 

            userid: ''
        }
    }




onChangeUserId(e) {
        this.setState({ userid: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
           

userid: this.state.userid
           
        };
const userid = this.state.userid;
        axios.delete('http://localhost:8080/user/'+ userid+"/delete", userObject)
            .then(function (response) {
alert("user updated, Click OK will redirect on admin page ")

window.location = "http://localhost:3000/Admin";
            }).catch((error) => {
alert("error")
                console.log(error)
            });

        this.setState({ username: "",userid: ""})
    }












    render() {
        return (

            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    
<p>Delete utilisateurs :</p><br></br>
<p>L'id de l'user doit etre recupere <a href="http://localhost:3000/Admin">ici</a></p>
                       

                       
<div className="form-group">

                        <label>user id :</label>
                        <input type="text" value={this.state.userid} onChange={this.onChangeUserId} className="form-control" />
                    </div>
    <div className="form-group">
                        <input type="submit" value="Supprimer" className="btn btn-success btn-block" />
                    </div>
                </form>




            </div>
        )
    }
}
export default MDelete;


