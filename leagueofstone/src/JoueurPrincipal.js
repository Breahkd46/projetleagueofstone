import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import HandsCards from "./HandsCards";

class JoueurPrincipal extends Component {

    render() {
        // const statusTurn = this.props.player.turn ? "" : "disabled";

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
                        <img className="hero"  src="/lol2.jpg"/> //alt='photo lol'
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
