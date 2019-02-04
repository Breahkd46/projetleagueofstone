import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import setMatchmaking from '../actions/setMatchmaking';
import updateMatchmakingRequest from "../actions/updateMatchmakingRequest";

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

import ButtonParticipate from './ButtonParticipate.js';
import ButtonUnParticipate from './ButtonUnParticipate.js';
import ListMatchmacking from './ListMatchmacking.js';
import ListRequest from './ListRequest.js';


class Participate extends Component {

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.reloadParticipate(),
      RELOAD_TIME
    );
    this.reloadParticipate()
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  // Do request to server to get if a request is accepted
  reloadParticipate() {
    if(this.props.matchmaking.matchmakingId !== "") {
      axios
        .get(
          SERVER_URL + "/matchmaking/participate?token=" +
          this.props.sessionToken.token
        )
        .then(res => {
          if (res.data.status === "ok") {
            console.log(res.data.data.request)
            console.log(this.props.matchmaking.request)
            console.log(res.data.data.request !== this.props.matchmaking.request)
            if (res.data.data.request !== this.props.matchmaking.request) {
              this.props.updateMatchmakingRequest(res.data.data.request)
            }
            if (res.data.data.match) {
              console.log(res.data.data);

              this.props.setMatchmaking(res.data.data.match);

            }
          } else {
            console.log(res.data.message);
          }
        });
    }

  }

  render() {
    if (this.props.matchmaking.matchmakingId === "") {
      return (
          <ButtonParticipate/>
      );
    } else if (this.props.matchmaking.match) {
      return (
          <div><p>Vous avez deja un match en cours...</p></div>
      )
    } else {
      return (
        <div>
        <div className="base">
          <div><ListMatchmacking /></div>
          <div><ListRequest requests={this.props.matchmaking.request} /></div>
        </div>
        <ButtonUnParticipate />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    matchmaking: state.matchmakingReducer,
    sessionToken: state.sessionReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    updateMatchmakingRequest: request => {
      dispatch(updateMatchmakingRequest(request))
    },
    setMatchmaking: match => {
      dispatch(setMatchmaking(match))
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Participate)
