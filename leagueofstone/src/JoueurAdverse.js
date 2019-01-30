import React, { Component } from "react";
import "./stylesheets/Joueur.css";
import CardVisible from "./CardVisible";

class JoueurAdverse extends Component {
  
    render() {
      return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <img src="/lol.jpg"/>
                </div>
                <div class="col">
                    Deck
                </div>
            </div>
            <div class="div_img">
                <CardVisible />
                
            </div>
        </div>
      );
    }
  
}
  
  export default JoueurAdverse