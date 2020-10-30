import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"
const apiUrl = `http://localhost:8080`;


class DProject extends Component {
  constructor(props) {
        super(props)




this.onChangeProjectId = this.onChangeProjectId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

 

            projectid: ''
        }
    }




onChangeProjectId(e) {
        this.setState({ projectid: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const projectObject = {
           

projectid: this.state.projectid
           
        };
const projectid = this.state.projectid;
        axios.delete('http://localhost:8080/projects/'+ projectid+"/delete", projectObject)
            .then(function (response) {
alert("project updated, Click OK will redirect on admin page ")

window.location = "http://localhost:3000/Room";
            }).catch((error) => {
alert("error")
                console.log(error)
            });

        this.setState({projectid: ""})
    }












    render() {
        return (

            <div className="wrapper">
                <form class="box" onSubmit={this.onSubmit}>
                    
<p>Supprimer un projet :</p>
<p>L'id du projet peut être récupéré <a href="http://localhost:3000/Room">ici</a></p>
                       

                       
<div className="form-group">

                    
                        <input type="text" placeholder="ID du projet" value={this.state.projectid} onChange={this.onChangeProjectId} className="form-control" />
                    </div>
    <div className="form-group">
                        <input type="submit" value="Supprimer" className="btn btn-success btn-block" />
                    </div>
                </form>




            </div>
        )
    }
}
export default DProject;


