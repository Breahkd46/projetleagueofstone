import React, { Component } from "react";
import './App.css'
import logo from "./logo.svg";
import "./Game.css";

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
          <h4>Nouvelle partie</h4>
        </div>
      </div>
    );
  }
}

export default Game;
