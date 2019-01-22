import React, { Component } from "react";

// import logo from "./logo.svg";

// Requete Server
import axios from "axios";
import { SERVER_URL } from "./consts";
// Redux
import { connect } from 'react-redux';
import removeTokenSession from './actions/removeTokenSession'

import "./App.css";

class Logout extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    axios
      .get(
        SERVER_URL + "/users/disconnect?token=" +
        this.props.sessionToken.token
      )
      .then(res => {
        if (res.data.status === "ok") {
          console.log(res.data);
          this.props.removeTokenSession("");
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        }
      });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Log out
      </button>
    );
  }
}

const mapStateToProps = state => {
  return { sessionToken: state.sessionReducer}
}

const mapDispatchToProps = dispatch => {
  console.log("ok");
  return {
    removeTokenSession: token => {
      dispatch(removeTokenSession(token))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Logout)
