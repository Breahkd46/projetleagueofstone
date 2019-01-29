import React, { Component } from "react";
import "./stylesheets/Joueur.css";

class JoueurAdverse extends Component {
  
    render() {
      return (
        <div class="container">
            <div class="div_img">
                <img src="/lol.jpg" height="20%" width="20%"/>
            </div>
            <div class="row">
                <div class="col">
                    Cartes plateau
                </div>
                <div class="col">
                    Deck
                </div>
            </div>
        </div>
      );
    }
  
}
  
  export default JoueurAdverse