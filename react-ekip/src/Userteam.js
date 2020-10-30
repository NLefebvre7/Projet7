import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"
const apiUrl = `http://localhost:8080`;


class Userteam extends Component {
  constructor(props) {
        super(props)


       this.onChangeUser1 = this.onChangeUser1.bind(this);
this.onChangeUser2 = this.onChangeUser2.bind(this);
this.onChangeUser3 = this.onChangeUser3.bind(this);
this.onChangeUser4 = this.onChangeUser4.bind(this);
this.onChangeTeamId = this.onChangeTeamId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            user1: '',
user2: '',
user3: '',
user4: '',

            teamid: ''
        }
    }


onChangeUser1(e) {
        this.setState({  user1: e.target.value })
    }
onChangeUser2(e) {
        this.setState({  user2: e.target.value })
    }
onChangeUser3(e) {
        this.setState({  user3: e.target.value })
    }
onChangeUser4(e) {
        this.setState({  user4: e.target.value })
    }
onChangeTeamId(e) {
        this.setState({ teamid: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const teamObject = {
           
user1: this.state.user1,
user2: this.state.user2,
user3: this.state.user3,
user4: this.state.user4,
teamid: this.state.teamid
           
        };
const teamid = this.state.teamid;
        axios.put('http://localhost:8080/team/'+ teamid+"/update", teamObject)
            .then(function (response) {
alert("Team updated, Click OK will redirect on ListTeam page ")

window.location = "http://localhost:3000/LTeam";
            }).catch((error) => {
alert("name already taken")
                console.log(error)
            });

        this.setState({ user1: "",user2: "",user3: "",user4: "",teamid: ""})
    }












    render() {
        return (

            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <ul>
<li><a href="http://localhost:3000/DTeam">Delete Team</a></li>
</ul><br></br>
<p>Ajouter des utilisateurs dans sa team:</p>
<p>L'id de la team doit etre recupere <a href="http://localhost:3000/LTeam">ici</a></p>
                       
<div className="form-group">

                        <label>ID de la team :</label>
                        <input type="text" value={this.state.teamid} onChange={this.onChangeTeamId} className="form-control" />
                    </div>
<div className="form-group">

                        <label>Modifier membre n1 :  </label>
                        <input type="text" value={this.state.user1} onChange={this.onChangeUser1} className="form-control" />
                    </div>

                   <div className="form-group">

                        <label>Modifier membre n2 :</label>
                        <input type="text" value={this.state.user2} onChange={this.onChangeUser2} className="form-control" />
                    </div>
<div className="form-group">

                        <label>Modifier membre n3 :</label>
                        <input type="text" value={this.state.user3} onChange={this.onChangeUser3} className="form-control" />
                    </div>
<div className="form-group">

                        <label>Modifier membre n4 :</label>
                        <input type="text" value={this.state.user4} onChange={this.onChangeUser4} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="update team" className="btn btn-success btn-block" />
                    </div>
                </form>




            </div>
        )
    }
}
export default Userteam;





