import React, { Component } from "react";
<<<<<<< HEAD

import Logout from "./Logout";
import Unsubscribe from './Unsubscribe';
import Participate from './Participate';

// Redux
import { connect } from 'react-redux';
import setMatch from './actions/setMatch';

=======
import './App.css'
>>>>>>> devEmma
import logo from "./logo.svg";
import "./Game.css";

class Game extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }



  render() {
<<<<<<< HEAD
    if(this.props.matchmaking.match !== null) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>League of Stones</h2>
            <p>Bienvenue</p> <br></br>
            <p> Et c'est parti </p>
            <div> {this.props.matchmaking.match.player1.name}</div>
            <p> CONTRE </p>
            <div> {this.props.matchmaking.match.player2.name} </div>
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

=======
    return (
      <div>
        <header>
          <ul className="menu">
            <li><a href="#compte">Compte</a></li>
            <li><a href="#cartes">Liste de cartes</a></li>
            <li><a href="/logout">Se déconnecter</a></li>
          </ul>
        </header>

        <div id="newPart">
          <h4>Nouvelle partie</h4>
        </div>
      </div>
    );
>>>>>>> devEmma
  }
}

const mapStateToProps = state => {
  return {
    match: state.matchReducer,
    matchmaking: state.matchmakingReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMatch: matchmakingId => {
      dispatch(setMatch(matchmakingId))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Game)
