import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import updateMatchmakingRequest from './actions/updateMatchmakingRequest';

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
            updateMatchmakingRequest(res.data.data.request)
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
      Tableau de requetes
        {this.props.matchmaking.request.map( player => {
          return (
            <div>
            <p>Name : {player.name}</p>
            <button value={player.matchmakingId} onClick={this.handleAcceptRequest} > Accepter </button>
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

const mapDispatchToProps = dispatch => {
  return {
    updateMatchmakingRequest: request => {
      dispatch(updateMatchmakingRequest(request))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ListRequest)
