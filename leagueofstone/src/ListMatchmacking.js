import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

import './list.css';
import './Signin.css';
import './stylesheets/ListMatchmacking.css';

class ListMatchmacking extends Component {

  constructor(props) {
    super(props);

    this.state = {
      players: [],
      playerRequest: [],
      errorMessage: "",
    };

    this.handleMatchRequest = this.handleMatchRequest.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(
        () => this.reloadRequests(),
        RELOAD_TIME
    );
    this.reloadRequests();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  reloadRequests() {
    axios
      .get(
        SERVER_URL + "/matchmaking/getAll?token=" +
        this.props.sessionToken.token
      )
      .then(res => {
        if (res.data.status === "ok") {
          console.log(res.data.data);
          this.setState({
            players: res.data.data
          })
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        } else {
          console.log(res.data.message);
        }
      });
  }

  handleMatchRequest(e) {
    console.log("Envoi de requete pour ", e.target.value);
    const matId = e.target.value;
    if(this.state.playerRequest.includes(matId)) {
      // console.log(this.state.playerRequest.includes(matId));
      // console.log(this.state.playerRequest)
      this.setState({
        errorMessage: "Vous avez deja fait une requete a ce joueur"
      })
    } else {
      axios
          .get(
              SERVER_URL + "/matchmaking/request?token=" +
              this.props.sessionToken.token +
              "&matchmakingId=" +
              e.target.value
          )
          .then(res => {
            if (res.data.status === "ok") {
              console.log(res.data.data);
              this.setState(state => ({
                playerRequest: [...state.playerRequest, matId]
              }))
              // this.props.history.push(process.env.PUBLIC_URL + "/");
            } else {
              console.log(res.data.message);
              this.setState({
                errorMessage: "La requete n'a pas fonctionné"
              })
            }
          });
      this.setState({
        errorMessage: ""
      })
    }

  }

  render() {
    console.log("reload");
    console.log(this.state.errorMessage);
    const alreadyChoose =  (
        <div>
          <p>{this.state.errorMessage}</p>
        </div>
    );
    return (
      <div>
      <table>
        <caption><h1>Tableau des joueurs en attente</h1></caption>
        <thead>
          <tr>
           <th>Name</th>
           <th>Request</th>
          </tr>
        </thead>
        <tbody>
        {this.state.players.map((player, i) => {
          return (
              <tr key={i}>
               <td>{player.name}</td>
               <td><button value={player.matchmakingId} onClick={this.handleMatchRequest}> Request </button></td>
              </tr>
          )
        })}
        </tbody>
      </table>
        {alreadyChoose}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    matchmaking: state.matchmakingReducer,
    sessionToken: state.sessionReducer
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     setMatchmacking: matchmakingId => {
//       dispatch(setMatchmacking(matchmakingId))
//     }
//   }
// }
export default connect(mapStateToProps,null)(ListMatchmacking)
