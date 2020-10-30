import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"
const apiUrl = `http://localhost:8080`;


class Room extends Component {
    
state = {
        projects: []
    };

    async loadProjects() {
        const res = await axios.get(apiUrl + '/projects/all');
        this.setState({
            projects: res.data
        });
    }

    componentDidMount() {
        this.loadProjects();
    }

  render() {
    return (

      <div className="App">
        <header className="">


         <p>Liste des projets:</p>
          <ul>
            {this.state.projects.map(project => (
              <li key={project}>Nom: {project.name}<br></br>
                                Temps estimé (en heures) : {project.expectedtime} 
                                Id : {project._id}
<br></br>______________   
</li>

            ))}
       </ul></header> </div>


    );
  }
}
export default Room;


































