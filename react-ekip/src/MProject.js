import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"
const apiUrl = `http://localhost:8080`;


class MProject extends Component {
  constructor(props) {
        super(props)


       this.onChangeProjectname = this.onChangeProjectname.bind(this);

this.onChangeProjectId = this.onChangeProjectId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            name: '',

            projectid: ''
        }
    }


onChangeProjectname(e) {
        this.setState({  name: e.target.value })
    }

onChangeProjectId(e) {
        this.setState({ projectid: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const projectObject = {
           
name: this.state.name,
projectid: this.state.projectid
           
        };
const projectid = this.state.projectid;
        axios.put('http://localhost:8080/projects/'+ projectid+"/update", projectObject)
            .then(function (response) {
alert("project updated, Click OK will redirect on admin page ")

window.location = "http://localhost:3000/Room";
            }).catch((error) => {
alert("error")
                console.log(error)
            });

        this.setState({ name: "",projectid: ""})
    }












    render() {
        return (

            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <br></br>
<li><a href="http://localhost:3000/DProject">Delete Project</a></li>
  <br></br>
<p>Modifier project :</p>
<p>L'id du project doit etre recupere <a href="http://localhost:3000/Room">ici</a></p>
                       
<div className="form-group">

                        <label>Modifier nom project :</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeProjectname} className="form-control" />
                    </div>
                       
<div className="form-group">

                        <label>project id :</label>
                        <input type="text" value={this.state.projectid} onChange={this.onChangeProjectId} className="form-control" />
                    </div>
    <div className="form-group">
                        <input type="submit" value="Modifier" className="btn btn-success btn-block" />
                    </div>
                </form>




            </div>
        )
    }
}
export default MProject;


