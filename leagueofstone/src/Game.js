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
            <li><a href="#déconnexion">Se déconnecter</a></li>
          </ul>
          {/* <div class="menu">
            <a href="#compte">Compte</a>
            <a href="#cartes">Liste de cartes</a>
            <a href="#déconnexion">Se déconnecter</a>
          </div> */}
        </header>
      </div>
    );
  }
}

export default Game;
