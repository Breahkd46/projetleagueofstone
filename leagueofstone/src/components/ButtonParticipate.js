import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import initMatchmaking from '../actions/initMatchmaking';

// Requete Server
import axios from 'axios';
import { SERVER_URL } from './consts';

import '../stylesheets/Signin.css'
import setMatchmaking from '../actions/setMatchmaking';

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
          const reqs = res.data.data.request ? res.data.data.request : [];
          console.log(reqs)
          this.props.initMatchmaking(res.data.data.matchmakingId, reqs)
          if (res.data.data.match) {
            console.log(res.data.data)
            this.props.setMatchmaking(res.data.data.match)
          }

        } else {
          console.log(res.data.message);
        }
      });
  }

  render() {
    return (
      <div className="base">
      <div id="bouton">
        <input type="button" value="Participer" onClick={this.handleClick}/>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { sessionToken: state.sessionReducer}
}

const mapDispatchToProps = dispatch => {
  return {
    initMatchmaking: (matchmakingId,request) => {
      dispatch(initMatchmaking(matchmakingId,request))
    },
    setMatchmaking: (match) => {
      dispatch(setMatchmaking(match))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonParticipate)
