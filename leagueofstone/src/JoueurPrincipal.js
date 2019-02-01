import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";
import HandsCards from "./HandsCards";

import axios from "axios";
import {SERVER_URL} from "./consts";
// import Card from "./CardHand.js";
import { connect } from 'react-redux';

class JoueurPrincipal extends Component {

    render() {
        // const statusTurn = this.props.player.turn ? "" : "disabled";
        console.log(this.props.handleAttackSource)
        return (
            <div className="container">
                <div className="div_img">
                    <CardVisible board={this.props.player.board} handleCard={this.props.handleAttackSource}/>
                    Carte visible
                </div>
                <div className="div_img">
                    Cartes main
                </div>
                <div className="row">
                    <div className="col2">
                        <p className="pJoueurP">Joueur {this.props.player.name}</p>
                    </div>
                    <div className="col">
                        <button disabled={!this.props.player.turn}
                                onClick={this.props.handlePickCard}>
                            Pioche
                        </button>
                    </div>
                    <div className="col">
                        <button disabled={!this.props.player.turn}
                                onClick={this.props.handleEndTurn}>
                            Fin du tour
                        </button>
                    </div>
                    <div className="deck">
                        Deck
                    </div>
                </div>
                <div className="hand">
                    <HandsCards handPlayer={this.props.player.hand}
                                handlePlayCard={this.props.handlePlayCard}/>
                </div>
            </div>
        );
    }

}

export default JoueurPrincipal;
