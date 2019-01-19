import React, { Component } from "react";

import Logout from "./Logout";
import Unsubscribe from './Unsubscribe';
import Participate from './Participate';

// Redux
import { connect } from 'react-redux';
import setMatch from './actions/setMatch';

import logo from "./logo.svg";
import "./App.css";

class Game extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    if(this.props.match.isMatch) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>League of Stones</h2>
            <p>Bienvenue</p>
          </header>
        </div>
      )
    } else {
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
}

const mapStateToProps = state => {
  return { match: state.matchReducer}
}

const mapDispatchToProps = dispatch => {
  return {
    setMatch: matchmakingId => {
      dispatch(setMatch(matchmakingId))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Game)
