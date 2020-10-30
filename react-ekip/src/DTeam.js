import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"
const apiUrl = `http://localhost:8080`;


class DTeam extends Component {
  constructor(props) {
        super(props)




this.onChangeTeamId = this.onChangeTeamId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

 

            teamid: ''
        }
    }




onChangeTeamId(e) {
        this.setState({ teamid: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const teamObject = {
           

teamid: this.state.teamid
           
        };
const teamid = this.state.teamid;
        axios.delete('http://localhost:8080/team/'+ teamid+"/delete", teamObject)
            .then(function (response) {
alert("Team deleted, Click OK will redirect on admin page ")

window.location = "http://localhost:3000/LTeam";
            }).catch((error) => {
alert("error")
                console.log(error)
            });

        this.setState({teamid: ""})
    }












    render() {
        return (

            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    
<p>Delete team :</p><br></br>
<p>L'id de la team doit etre recupere <a href="http://localhost:3000/LTeam">ici</a></p>
                       

                       
<div className="form-group">

                        <label>team id :</label>
                        <input type="text" value={this.state.teamid} onChange={this.onChangeTeamId} className="form-control" />
                    </div>
    <div className="form-group">
                        <input type="submit" value="Supprimer" className="btn btn-success btn-block" />
                    </div>
                </form>




            </div>
        )
    }
}
export default DTeam;


