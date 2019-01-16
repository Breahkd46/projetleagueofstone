import React, { Component } from "react";

import logo from "./logo.svg";
import axios from "axios";

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
          this.props.setLogout();
          // this.props.history.push(process.env.PUBLIC_URL + "/");
        }
      });
      this.props.setLogout();
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        Log out
      </button>
    );
  }
}

export default Logout;
