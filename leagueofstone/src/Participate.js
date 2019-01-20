import React, { Component } from "react";

import ButtonParticipate from './ButtonParticipate';
import ButtonUnParticipate from './ButtonUnParticipate';
import ListMatchmacking from './ListMatchmacking';
import ListRequest from './ListRequest';

// Redux
import { connect } from 'react-redux';
import setMatchmaking from './actions/setMatchmaking';
import setMatch from './actions/setMatch';

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";
import { RELOAD_TIME } from "./consts";

class Participate extends Component {

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.reloadParticipate(),
      RELOAD_TIME
    );
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
            if (res.data.data.match) {
              console.log(res.data.data);
              this.props.setMatchmaking(res.data.data.match);

            }

            // this.props.history.push(process.env.PUBLIC_URL + "/");
          } else {
            console.log(res.data.message);
          }
        });
    }

  }

  render() {
    if (this.props.matchmaking.matchmakingId === "") {
      return (
        <ButtonParticipate />
      );
    } else {
      return (
        <div>
          <ListMatchmacking />
          <ListRequest requests={this.props.matchmaking.request} />
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
}

const mapDispatchToProps = dispatch => {
  return {
    setMatchmaking: match => {
      dispatch(setMatchmaking(match))
    },
    setMatch: (player1, player2) => {
      dispatch(setMatch(player1, player2))
    }

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Participate)
