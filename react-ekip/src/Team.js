import React, { Component } from "react";

//import PropTypes from "prop-types"
import axios from "axios"
const apiUrl = `http://localhost:8080`;


class ListTeam extends Component {
    
state = {
        teams: []
    };

    async loadTeams() {
        const res = await axios.get(apiUrl + '/team/all');
        this.setState({
            teams: res.data
        });
    }

    componentDidMount() {
        this.loadTeams();
    }












  render() {
    return (

      <div className="App">
        <header className="">


         <p>Liste des teams:</p>
          <ul>
            {this.state.teams.map(team => (
              <li key={team}>Nom: {team.name}<br></br>

                            Membres de l'equipe : {team.user1}  {team.user2}  {team.user3}  {team.user4}
                                <br></br>Id de la team: {team._id}<br></br>______________   </li>

            ))}
       </ul></header> </div>


    );
  }
}
export default ListTeam;


































