import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";

class JoueurPrincipal extends Component {



    render() {
      return (
        <div class="container">
            <div class="div_img">
                <CardVisible handleCard = {this.props.handleAttack} board = {this.props.player.board}/>
                Carte visible
            </div>
            <div class="div_img">
                Cartes main
            </div>
            <div class="row">
                <div class="herov1">
                    <img class="hero" src="/lol2.jpg"/>
                </div>
                <div class="col">
                    Deck
                </div>
            </div>
        </div>
      );
    }

}

  export default JoueurPrincipal
