import React, { Component } from "react";

import Logout from "./Logout";
import Unsubscribe from './Unsubscribe'
import Participate from './Participate'

import logo from "./logo.svg";
import "./App.css";

class Game extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logout />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>League of Stones</h2>
          <p>Bienvenue</p>
        </header>
        <Participate />
        <Unsubscribe />
      </div>
    );
  }
}

export default Game
