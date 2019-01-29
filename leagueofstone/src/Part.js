import React, { Component } from "react";
import "./stylesheets/Part.css";

class Part extends Component {
  
    render() {
      return (
        <div class="newBase">
          <div class="container">
            <div class="row">
              <div class="col">
                Joueur adverse
              </div>
              <div class="col">
                Cartes plateau adversaire
              </div>
              <div class="col">
                Deck
              </div>
            </div>
            <div class="row">
              <div class="col">
                Joueur 2
              </div>
              <div class="col">
                <div class="row">
                  Cartes plateau
                </div>
                <div class="row">
                  Cartes main
                </div>
              </div>
              <div class="col">
                Deck
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Part
  