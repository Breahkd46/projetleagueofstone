import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import setMatchmacking from './actions/setMatchmacking';

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";

class ButtonParticipate extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .get(
        SERVER_URL + "/matchmaking/participate?token=" +
        this.props.sessionToken.token
      )
      .then(res => {
        if (res.data.status === "ok") {
          this.props.setMatchmacking(res.data.data.matchmakingId, res.data.data.request)
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        } else {
          console.log(res.data.message);
        }
      });
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      Participer
      </button>
    );
  }
}

const mapStateToProps = state => {
  return { sessionToken: state.sessionReducer}
}

const mapDispatchToProps = dispatch => {
  return {
    setMatchmacking: (matchmakingId,request) => {
      dispatch(setMatchmacking(matchmakingId,request))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonParticipate)
