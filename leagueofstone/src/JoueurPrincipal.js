import React, { Component } from "react";
import "./stylesheets/Joueur.css";

class JoueurPrincipal extends Component {
  
    render() {
      return (
        <div class="container">
            <div class="div_img">
                Cartes plateau
            </div>
            <div class="row">
                <div class="col">
                    Cartes main
                </div>
                <div class="col">
                    Deck
                </div>
            </div>
            <div class="div_img">
                <img src="/lol2.jpg" height="20%" width="20%"/>
            </div>
        </div>
      );
    }
  
}
  
  export default JoueurPrincipal