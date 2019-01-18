import React, { Component } from "react";

// import logo from "./logo.svg";
import axios from "axios";

// Redux
import { connect } from 'react-redux';
import removeTokenSession from './actions/removeTokenSession'

import { SERVER_URL } from "./consts";
import "./App.css";

class Logout extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    axios
      .get(
        SERVER_URL + "/users/disconnect"
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

// const mapStateToProps = state => {
//   return { sessionToken: state.sessionReducer}
// }

const mapDispatchToProps = dispatch => {
  console.log("ok");
  return {
    removeTokenSession: token => {
      dispatch(removeTokenSession(token))
    }
  }
}

export default connect(null,mapDispatchToProps)(Logout)
