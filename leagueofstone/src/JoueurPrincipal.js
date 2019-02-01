import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";
import HandsCards from "./HandsCards";

class JoueurPrincipal extends Component {



    render() {
      return (
        <div class="container">
            <div class="div_img">
                <CardVisible handleCard = {this.props.handleAttack} board = {this.props.player.board}/>
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
