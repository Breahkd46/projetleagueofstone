import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

class ListMatchmacking extends Component {

  constructor(props) {
    super(props);

    this.state = {
      players: [],
      playerRequest: []
    }

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
          // this.setState({
          //   players: res.data.data
          // })
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        } else {
          console.log(res.data.message);
        }
      });
  }

  render() {
    console.log("reload");
    return (
      <div> Tableau des joueurs en attente
      {this.state.players.map((player, i) => {
        return (
          <div key={i}>
          {console.log(player)}
          <p>Name : {player.name}</p>
          <button value={player.matchmakingId} onClick={this.handleMatchRequest}> Request </button>
          </div>
        )
      })}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     setMatchmacking: matchmakingId => {
//       dispatch(setMatchmacking(matchmakingId))
//     }
//   }
// }
export default connect(mapStateToProps,null)(ListMatchmacking)
