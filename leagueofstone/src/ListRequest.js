import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import updateMatchmakingRequest from './actions/updateMatchmakingRequest';
import setMatch from './actions/setMatch';

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

class ListRequest extends Component {

  constructor(props) {
    super(props);

    this.handleAcceptRequest = this.handleAcceptRequest.bind(this);
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.reloadRequests(),
      RELOAD_TIME
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  reloadRequests() {
    axios
      .get(
        SERVER_URL + "/matchmaking/participate?token=" +
        this.props.sessionToken.token
      )
      .then(res => {
        if (res.data.status === "ok") {
          console.log(res.data.data.request);
          if (res.data.data.request !== this.props.matchmaking.request) {
            this.props.updateMatchmakingRequest(res.data.data.request)
          }
        } else {
          console.log(res.data.message);
        }
      });
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
          // this.props.history.push(process.env.PUBLIC_URL + "/");
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
        <caption>Tableau de requetes</caption>
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
