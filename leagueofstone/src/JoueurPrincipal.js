import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";
import HandsCards from "./HandsCards";

class JoueurPrincipal extends Component {

    render() {
      return (
        <div class="container">
            <div class="div_img">
                {/* <CardVisible /> */}
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
            <div class="hand">
              {<HandsCards handPlayer={this.props.player.hand}/>}
            </div>
        </div>
      );
    }

}

export default JoueurPrincipal;
