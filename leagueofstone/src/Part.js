import React, { Component } from "react";
import "./stylesheets/Part.css";

import ButtonTimer from "./ButtonTimer";
import JoueurAdverse from "./JoueurAdverse";
import JoueurPrincipal from "./JoueurPrincipal";

import "./stylesheets/Joueur.css";

class Part extends Component {

  


  
    render() {
      return (
        <div class="newBase">
          <div class="container">
              <div class="row">
                  <JoueurAdverse />
              </div>
              <div class="row">
                <JoueurPrincipal />
              </div>
              <div class="row">
                <div class="col">
                <ButtonTimer />
                </div>
                <div class="col">
                  Fin de tour
                </div>
              </div>
          </div>
        </div>
      );
    }
  
}
  
  export default Part
  