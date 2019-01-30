import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";

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
                <div class="col">
                    <img src="/lol2.jpg"/>
                </div>
                <div class="col">
                    <div class="deck">
                    </div>
                </div>
            </div>
        </div>
      );
    }
  
}
  
  export default JoueurPrincipal