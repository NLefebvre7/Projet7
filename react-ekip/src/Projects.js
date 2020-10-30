import React, { Component } from "react";

import './style.css'


import axios from "axios"
const apiUrl = `http://localhost:8080`;

class Project extends Component {
constructor(props) {
        super(props)


      this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeProjectExpectedtime = this.onChangeProjectExpectedtime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            expectedtime: parseInt('')
        }
    }

    onChangeProjectName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeProjectExpectedtime(e) {
        this.setState({ expectedtime: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const projectObject = {
            name: this.state.name,
            expectedtime: this.state.expectedtime
        };

        axios.post('http://localhost:8080/projects/create', projectObject)
            .then(function (response) {
alert("Project created, Click OK will redirect on Room page ")

window.location = "http://localhost:3000/Room";
            }).catch((error) => {
alert("name already taken")
                console.log(error)
            });

        this.setState({ name: '', expectedtime: parseInt('') })
    }












    render() {
        return (

            <div className="wrapper">
                <form class ="box" onSubmit={this.onSubmit}>
                    <div className="form-group">
<strong>Créer son projet :</strong><br></br><br></br>
                        <input type="text" placeholder="Nom du projet" value={this.state.name} onChange={this.onChangeProjectName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Temps estimé: (en heures)</label>
                        <input type="Number" placeholder="temps estimé en heure" value={this.state.expectedtime} onChange={this.onChangeProjectExpectedtime} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Envoyer" className="btn btn-success btn-block" />
                    </div>
                </form>




            </div>
        )
    }
}
export default Project;