import React, { Component } from "react";



import axios from "axios"
import './style.css';

const apiUrl = `http://localhost:8080`;

class CreateTeam extends Component {
constructor(props) {
        super(props)


      this.onChangeTeamName = this.onChangeTeamName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: ''
        }
    }

    onChangeTeamName(e) {
        this.setState({ name: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        const teamObject = {
            name: this.state.name
           
        };

        axios.post('http://localhost:8080/team/create', teamObject)
            .then(function (response) {
alert("Team created, Click OK will redirect on ListTeam page ")

window.location = "http://localhost:3000/LTeam";
            }).catch((error) => {
alert("name already taken")
                console.log(error)
            });

        this.setState({ name: '' })
    }












    render() {
        return (

            <div  className="wrapper">
                <form class="box" onSubmit={this.onSubmit}>
                    <div className="form-group">

                        <strong>Enregistrez le nom de votre ekip :</strong>
                        <input type="text" placeholder="Nom de l'équipe" value={this.state.name} onChange={this.onChangeTeamName} className="form-control" />
                    </div>
                   
                    <div className="form-group">
                        <input type="submit" value="Create Team" className="btn btn-success btn-block" />
                    </div>
                </form>




            </div>
        )
    }
}
export default CreateTeam;