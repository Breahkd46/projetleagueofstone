import React, { Component } from "react";

import Logout from "./Logout";
import Unsubscribe from './Unsubscribe';
import Participate from './Participate';

// Redux
import { connect } from 'react-redux';
import setMatch from './actions/setMatch';

import "./Game.css";
import Match from "./Match";

class Game extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }



  render() {
    if(this.props.matchmaking.match !== null) {
      return (
          <div>
            <Match />
          </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
          <ul className="menu">
              <li><a href="#compte">Compte</a></li>
              <li><a href="#cartes">Liste de cartes</a></li>
              <li><a href="/logout">Se déconnecter</a></li>
            </ul>
            <h2>League of Stones</h2>
            <p>Bienvenue</p>
          </header>
            <Participate />
          <div className="base">
            <Unsubscribe />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    match: state.matchReducer,
    matchmaking: state.matchmakingReducer
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setMatch: matchmakingId => {
      dispatch(setMatch(matchmakingId))
    }
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Game)
