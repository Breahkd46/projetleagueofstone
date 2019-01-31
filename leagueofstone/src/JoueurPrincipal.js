import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";
import HandsCards from "./HandsCards";

import axios from "axios";
import {SERVER_URL} from "./consts";
import Card from "./CardHand.js";
import { connect } from 'react-redux';

class JoueurPrincipal extends Component {

    render() {
      return (
        <div className="container">
            <div className="div_img">
                 {/*<CardVisible board={this.props.player.board}/>*/}
                Carte visible
            </div>
            <div className="div_img">
                Cartes main
            </div>
            <div className="row">
                <div className="herov1">
                    <img className="hero" src="/lol2.jpg"/>
                </div>
                <div className="col">
                    <button {(this.props.player.turn) ? "" : "disabled"}
                        onClick={this.props.handlePickCard()}>
                        Pioche
                    </button>
                </div>
                <div className="col">
                    <button {(this.props.player.turn) ? "" : "disabled"}
                        onClick={this.props.handleEndTurn()}>
                        Fin du tour
                    </button>
                </div>
                <div className="deck">
                    Deck
                </div>
            </div>
            <div className="hand">
              {<HandsCards handPlayer={this.props.player.hand}/>}
            </div>
        </div>
      );
    }

}

export default JoueurPrincipal;
