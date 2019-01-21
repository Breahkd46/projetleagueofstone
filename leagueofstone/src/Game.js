import React, { Component } from "react";
import './App.css'
import logo from "./logo.svg";
import "./Game.css";
import Participate from "./Participate";

class Game extends Component {
  render() {
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
        <Participate />
        </div>
      </div>
    );
  }
}

export default Game;
