import React, { Component } from "react";

// Redux
import { connect } from 'react-redux';
import removeMatchmaking from '../actions/removeMatchmaking';

// Requete Server
import axios from 'axios';
import { SERVER_URL } from './consts';

import '../stylesheets/Signin.css';

class ButtonUnParticipate extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    axios
      .get(
        SERVER_URL + "/matchmaking/unparticipate?token=" +
        this.props.sessionToken.token
      )
      .then(res => {
        if (res.data.status === "ok") {
          console.log(res.data.data);
          this.props.removeMatchmaking("")
        } else {
          console.log(res.data.message);
        }
      });
  }

  render() {
    return (
      <div className="base">
      <div id="bouton">
        <input type="button" value="Annuler" onClick={this.handleClick}/>
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
    removeMatchmaking: (token) => {
      dispatch(removeMatchmaking(token))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ButtonUnParticipate)
