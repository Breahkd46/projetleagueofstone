import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";
import HandsCards from "./HandsCards";

class JoueurPrincipal extends Component {

    render() {
      return (
        <div className="container">
            <div className="div_img">
                {/* <CardVisible /> */}
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
