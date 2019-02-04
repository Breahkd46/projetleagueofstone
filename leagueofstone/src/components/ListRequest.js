import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import updateMatchmakingRequest from '../actions/updateMatchmakingRequest';
import setMatch from '../actions/updateMatch';

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";

import "../stylesheets/Signin.css";
import "../stylesheets/ListMatchmacking.css"

class ListRequest extends Component {

  constructor(props) {
    super(props);

    this.handleAcceptRequest = this.handleAcceptRequest.bind(this);
  }

  handleAcceptRequest(e) {
    axios
      .get(
        SERVER_URL + "/matchmaking/acceptRequest?token=" +
        this.props.sessionToken.token +
        "&matchmakingId=" +
        e.target.value
      )
      .then(res => {
        if (res.data.status === "ok") {
          console.log(res.data.data);
        } else {
          console.log(res.data.message);
        }
      });
  }

  render() {
    console.log(this.props.matchmaking.request);
    return (
      <div>
      <table>
        <caption><h1>Tableau de requetes</h1></caption>
        <thead>
          <tr>
           <th>Name</th>
           <th>Accepter</th>
          </tr>
        </thead>
        <tbody>
        {this.props.matchmaking.request.map( (player, i) => {
          return (
            <tr key={i}>
             <td>{player.name}</td>
             <td><button value={player.matchmakingId} onClick={this.handleAcceptRequest} > Accepter </button></td>
            </tr>
          )
        })}
        </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    matchmaking: state.matchmakingReducer,
    sessionToken: state.sessionReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateMatchmakingRequest: request => {
      dispatch(updateMatchmakingRequest(request))
    },
    setMatch: (player1,player2) => {
      dispatch(setMatch(player1,player2))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListRequest)
